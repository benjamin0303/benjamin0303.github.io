const profileFlipButton = document.querySelector(".profile-flip-button");

// Keep a single, small portrait if the component stylesheet is unavailable.
if (getComputedStyle(profileFlipButton.querySelector(".profile-front")).position === "absolute") {
  profileFlipButton.querySelector(".profile-back").hidden = false;
  profileFlipButton.addEventListener("click", () => {
    const flipped = profileFlipButton.getAttribute("aria-pressed") !== "true";
    profileFlipButton.setAttribute("aria-pressed", String(flipped));
    profileFlipButton.setAttribute("aria-label", flipped ? "Show portrait photo" : "Show pumpkin photo");
    profileFlipButton.querySelector(".profile-front").setAttribute("aria-hidden", String(flipped));
    profileFlipButton.querySelector(".profile-back").setAttribute("aria-hidden", String(!flipped));
  });
}
