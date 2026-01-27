// Handle text bubble clicks to expand content
const bubbles = document.querySelectorAll(".text-bubble");

bubbles.forEach(bubble => {
  bubble.addEventListener("click", () => {
    const section = bubble.dataset.section;
    const content = document.getElementById(`content-${section}`);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

//reflection reveal code
const reflections = document.querySelectorAll(".reflection");

reflections.forEach(ref => {
  const sectionDiv = ref.parentElement;
  const mediaElements = sectionDiv.querySelectorAll("audio, video");
  
  mediaElements.forEach(media => {
    media.addEventListener("play", () => {
      media.dataset.played = true;

      // Check if all media have been played at least once
      const allPlayed = Array.from(mediaElements).every(m => m.dataset.played);
      if (allPlayed) {
        ref.classList.add("show"); // fade in smoothly
      }
    });
  });
});

