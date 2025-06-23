document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".media-main-card");
  cards.forEach(card => {
    const icon = card.querySelector(".video-icon");
    const video = card.querySelector("video");
    if (icon && video) {
      icon.addEventListener("click", function (e) {
        e.stopPropagation();
        card.classList.add("play-video");
        video.play();
      });
      video.addEventListener("click", function (e) {
        e.stopPropagation();
        video.pause();
        card.classList.remove("play-video");
      });
    }
  });
});
