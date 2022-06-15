const nextSlideImg = document.querySelector('.btnFoward');
const prevSlideImg = document.querySelector('.btnBackward');

const sliderImg = Array.from(document.querySelectorAll('.slider-img'));

let i = 0;

nextSlideImg.addEventListener('click', function() {

  sliderImg[i].classList.remove('active');
  i = (i + 1) % sliderImg.length;
  sliderImg[i].classList.add('active');
});

prevSlideImg.addEventListener('click', function() {

  sliderImg[i].classList.remove('active')
  i = (i - 1 + sliderImg.length) % sliderImg.length;
  sliderImg[i].classList.add('active');
});