const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderDots = document.querySelector('.slider-dots');

let currentSlide = 0;

function showSlide(n) {
  sliderInner.style.transform = `translateX(-${n * 100}%)`;
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === n);
  });
}

function updateButtons() {
  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
      updateButtons();
      updateDots();
    });
    sliderDots.appendChild(dot);
  }
  updateDots();
}

function updateDots() {
  const dots = sliderDots.querySelectorAll('span');
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === currentSlide ? 'black' : 'gray';
  });
}

prevBtn.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
  updateButtons();
  updateDots();
});

nextBtn.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
  updateButtons();
  updateDots();
});

showSlide(currentSlide);
updateButtons();
createDots();