let currentIndex = 0;

const Images = document.querySelectorAll('.slider img');
const intervall = 2000;

function nextImage() {
  Images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % Images.length;
  Images[currentIndex].classList.add('active');
}

Image[currentIndex].classList.add('active');

setInterval(nextImage, intervall);