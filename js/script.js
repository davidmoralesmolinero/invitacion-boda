document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('mariachiAudio');
  const playBtn = document.getElementById('playMusicBtn');

  // Intentar autoplay
  audio.play().catch(() => {
    playBtn.style.display = 'inline-block';
  });

  playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.style.display = 'none';
  });

  // Lightbox
  const galleryImgs = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});
