import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';

// Seleciona todos os elementos de vídeo e botões de play/pause
const videos = document.querySelectorAll('.videoPlayer');
const playPauseBtns = document.querySelectorAll('.playPauseBtn');

videos.forEach((video, index) => {
  const playPauseBtn = playPauseBtns[index]; // Botão correspondente a cada vídeo
  const playIconImg = document.createElement('img');
  playIconImg.src = playIcon;
  playIconImg.alt = 'Play';
  playPauseBtn.appendChild(playIconImg);

  // Adicionar a opacidade ao vídeo assim que a página for carregada
  video.classList.add('opacity-25'); // Aplica a opacidade de 75% desde o início

  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIconImg.src = pauseIcon;
    } else {
      video.pause();
      playIconImg.src = playIcon;
    }
  });

  // Evento de quando o vídeo começa a reproduzir
  video.addEventListener('play', () => {
    playPauseBtn.style.display = 'none'; // Esconde o botão de play/pause quando o vídeo toca
    video.classList.remove('opacity-25'); // Remove a opacidade ao iniciar o vídeo
  });

  // Evento de quando o vídeo é pausado
  video.addEventListener('pause', () => {
    playPauseBtn.style.display = 'flex'; // Mostra o botão de play/pause quando o vídeo pausa
    playIconImg.src = playIcon;
    video.classList.add('opacity-25'); // Adiciona opacidade ao pausar
  });

  // Mostrar o botão e alternar play/pause ao clicar no player
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play(); // Reproduzir vídeo
      playIconImg.src = pauseIcon;
      playPauseBtn.style.display = 'none'; // Esconde o botão de play/pause
      video.classList.remove('opacity-25'); // Remove opacidade ao reproduzir
    } else {
      video.pause(); // Pausar vídeo
      playIconImg.src = playIcon;
      playPauseBtn.style.display = 'flex'; // Mostra o botão de play/pause
      video.classList.add('opacity-25'); // Adiciona opacidade ao pausar
    }
  });
});
