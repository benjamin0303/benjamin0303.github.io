// After a production build, serve _site and run: node test/profile_photo.js http://127.0.0.1:8766/
// CHROMIUM_PATH may point to an already installed Chromium executable.
const assert = require("node:assert/strict");
const { chromium, expect } = require("@playwright/test");

(async () => {
  const url = process.argv[2];
  assert(url, "Pass the URL of the locally served production build");
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  try {
    for (const [viewportWidth, photoWidth] of [
      [1440, 220],
      [390, 200],
    ]) {
      const page = await browser.newPage({ viewport: { width: viewportWidth, height: 1000 }, reducedMotion: "reduce" });
      await page.goto(url);
      const button = page.locator(".profile-flip-button");
      const front = page.locator(".profile-front");
      const back = page.locator(".profile-back");
      const inner = page.locator(".profile-flip-inner");
      await expect(button).toHaveCSS("width", `${photoWidth}px`);
      await expect(button).toHaveCSS("height", `${photoWidth}px`);
      await expect(back).not.toHaveAttribute("hidden");
      for (const face of [front, back]) {
        await expect(face).toHaveCSS("position", "absolute");
        await expect(face).toHaveCSS("backface-visibility", "hidden");
        await expect(face).toHaveCSS("width", `${photoWidth}px`);
        const offset = await face.evaluate((img) => img.getBoundingClientRect().y - img.closest("button").getBoundingClientRect().y);
        assert(Math.abs(offset) < 1, "Photos must occupy the same slot, not stack");
        assert(await face.evaluate((img) => img.complete && img.naturalWidth > 0), "Photo must load");
      }
      await button.click();
      await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(button).toHaveAttribute("aria-label", "Show portrait photo");
      await expect(back).toHaveAttribute("aria-hidden", "false");
      await expect(inner).toHaveCSS("transform", /^matrix3d\(-1,/);
      await button.press("Enter");
      await expect(button).toHaveAttribute("aria-pressed", "false");
      await button.press("Space");
      await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(inner).toHaveCSS("transition-duration", "0s");
      await page.close();
    }

    const page = await browser.newPage();
    await page.route("**/assets/css/main.css*", (route) => route.abort());
    await page.goto(url);
    await expect(page.locator(".profile-back")).toBeHidden();
    await expect(page.locator(".profile-front")).toBeVisible();
    assert((await page.locator(".profile-front").boundingBox()).width <= 220, "Fallback portrait must stay small");
    await page.locator(".profile-flip-button").click();
    await expect(page.locator(".profile-back")).toBeHidden();
    await page.close();
    console.log("Profile photo checks passed: desktop, mobile, keyboard, reduced motion, missing CSS");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
