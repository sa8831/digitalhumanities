document.addEventListener("DOMContentLoaded", () => {
  const bubbleBtn = document.querySelector(".bubble-btn");
  const infoBubble = document.getElementById("bubble1");
  const reflection = infoBubble.querySelector(".reflection");
  const mediaElements = infoBubble.querySelectorAll("audio, video");

  // Click bubble to show media
  bubbleBtn.addEventListener("click", () => {
    infoBubble.classList.add("show-media");
  });

  // Track media interactions
  mediaElements.forEach(media => {
    media.dataset.played = false;

    media.addEventListener("play", () => {
      media.dataset.played = true;

      // Check if all media played
      const allPlayed = Array.from(mediaElements).every(m => m.dataset.played === "true");

      if (allPlayed) {
        reflection.classList.add("show");
      }
    });
  });
});
