const nextSlideTxt = document.querySelector('.btnFoward');
const prevSlideTxt = document.querySelector('.btnBackward');

const sliderTxt = Array.from(document.querySelectorAll('.hero'));


let j = 0;

nextSlideTxt.addEventListener('click', function () { 

  sliderTxt[j].classList.remove('active');
  j = (j + 1) % sliderTxt.length;
  sliderTxt[j].classList.add('active');

}); 

prevSlideTxt.addEventListener('click', function() {

  sliderTxt[j].classList.remove('active');
  j = ( j - 1 + sliderTxt.length) % sliderTxt.length;
  sliderTxt[j].classList.add('active');

});