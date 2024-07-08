const sliderLine = document.querySelector('.slider_line');
const pagination = document.querySelectorAll('.pagination');
const btnNextSlide = document.querySelector('.slider_control_next');

export const initSlider = () => {
  prevSlide();
  btnNextSlide.addEventListener('click', nextSlide);
  setSlideInterval();
}

let position = 0;
let controlIndex = 0;

const prevSlide = () => {
  document.querySelector('.slider_control_prev').addEventListener('click', () => {
    position -= 480;
    controlIndex--;

    if (position < 0) {
      position = 960;
      controlIndex = 2;
    }
    sliderLine.style.left = `${-position}px`;

    toggleSelectedPagination(controlIndex);
  });
};

const nextSlide = () => {
  position += 480;
  controlIndex++;

  if (position > 960) {
    position = 0;
    controlIndex = 0;
  }
  sliderLine.style.left = `${-position}px`;

  toggleSelectedPagination(controlIndex);
};

const toggleSelectedPagination = (index) => {
  pagination.forEach((line) => {
    line.classList.remove('pagination_active');
  });

  pagination[index].classList.add('pagination_active');
};

const setSlideInterval = () => {
  setInterval(() => {
    nextSlide();
  }, 5000);
}