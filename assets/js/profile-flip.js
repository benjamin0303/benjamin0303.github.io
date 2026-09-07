const profileFlipButton = document.querySelector(".profile-flip-button");

profileFlipButton.addEventListener("click", () => {
  const flipped = profileFlipButton.getAttribute("aria-pressed") !== "true";
  profileFlipButton.setAttribute("aria-pressed", String(flipped));
  profileFlipButton.querySelector(".profile-front").setAttribute("aria-hidden", String(flipped));
  profileFlipButton.querySelector(".profile-back").setAttribute("aria-hidden", String(!flipped));
});
