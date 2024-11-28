import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';

const videos = document.querySelectorAll('.videoPlayer');
const playPauseBtns = document.querySelectorAll('.playPauseBtn');

videos.forEach((video, index) => {
  const playPauseBtn = playPauseBtns[index];
  const playIconImg = document.createElement('img');
  playIconImg.src = playIcon;
  playIconImg.alt = 'Play';
  playPauseBtn.appendChild(playIconImg);

  video.classList.add('opacity-25');

  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIconImg.src = pauseIcon;
    } else {
      video.pause();
      playIconImg.src = playIcon;
    }
  });

  video.addEventListener('play', () => {
    playPauseBtn.style.display = 'none';
    video.classList.remove('opacity-25');
  });

  // Evento de quando o vídeo é pausado
  video.addEventListener('pause', () => {
    playPauseBtn.style.display = 'flex';
    playIconImg.src = playIcon;
    video.classList.add('opacity-25');
  });

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play(); // Reproduzir vídeo
      playIconImg.src = pauseIcon;
      playPauseBtn.style.display = 'none';
      video.classList.remove('opacity-25');
    } else {
      video.pause(); // Pausar vídeo
      playIconImg.src = playIcon;
      playPauseBtn.style.display = 'flex';
      video.classList.add('opacity-25');
    }
  });
});
