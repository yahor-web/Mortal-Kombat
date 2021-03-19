$ (Document).ready(function () {
$('#app').vide({
  mp4: 'video/video.mp4',
  webm: 'video/video.webm',
  ogv: 'video/video.ogv',
  poster: 'img/cover-image.jpg'
});
});


const modal = document.querySelector('.modal');
const primaryBtn = document.querySelector('.button-primary');

const toggleHandler = () => {
    modal.classList.toggle('modalHide')
}

primaryBtn.addEventListener('click', toggleHandler);
modal.addEventListener('click', toggleHandler);