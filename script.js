var videoPlayer = document.getElementById("video-player");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

var videos = ["./static/Step-1.mov", "./static/Step-2.mov", "./static/Step-3.mov", "./static/4 Bake.mov", "./static/5 Dip.mov", "./static/6 Serving.mov"]; // Add your video URLs here
var currentVideoIndex = 0;

// Function to load the current video
function loadVideo() {
  videoPlayer.src = videos[currentVideoIndex];
}

// Function to play the next video
function nextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex--; // Wrap around to the first video
  }
  loadVideo();
}

// Function to play the previous video
function prevVideo() {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = 0; // Wrap around to the last video
  }
  loadVideo();
}

// Load the initial video
loadVideo();
