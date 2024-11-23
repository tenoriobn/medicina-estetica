function togglePlay(videoId) {
  const video = document.getElementById(videoId);
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function rewind(videoId) {
  const video = document.getElementById(videoId);
  video.currentTime -= 5; // Volta 5 segundos
}

function forward(videoId) {
  const video = document.getElementById(videoId);
  video.currentTime += 5; // Avança 5 segundos
}
