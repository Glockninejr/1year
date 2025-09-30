// --- POPUP FUNCTIONS ---
function openPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

// --- BACKGROUND VIDEO SEQUENCE ---
const video = document.getElementById("bg-video");
const videos = ["video1.mp4", "video2.mp4"]; // add your videos here
let currentVideo = 0;

video.src = videos[currentVideo];
video.play();

video.addEventListener("ended", function () {
  currentVideo = (currentVideo + 1) % videos.length;
  video.src = videos[currentVideo];
  video.play();
});

// --- HEART SLIDESHOW ---
const heartImages = ["heart1.png", "heart2.png", "heart3.png"];
let currentHeart = 0;
const heartImg = document.getElementById("heart-img");

setInterval(() => {
  currentHeart = (currentHeart + 1) % heartImages.length;
  heartImg.src = heartImages[currentHeart];
}, 3000); // every 3 seconds

// --- ENABLE SOUND ON BUTTON CLICK ---
function enableSound() {
  video.muted = false;   // unmute
  video.play();          // replay with sound
}
