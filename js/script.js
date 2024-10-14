const images = [
  "img/review-1-img.jpg",
  "img/review-2-img.jpg",
  "img/review-3-img.jpg",
];

let currentIndex = 0;

const imgElement = document.querySelector(".work--5__img");
const btnLeft = document.querySelector(".work--5__btn.left");
const btnRight = document.querySelector(".work--5__btn.right");

// Обновляем изображение и состояние кнопок
function updateSlider() {
  // Убираем класс active перед сменой изображения
  imgElement.classList.remove("active");

  // Задержка для плавного исчезновения
  setTimeout(() => {
    imgElement.src = images[currentIndex];
    imgElement.classList.add("active"); // Плавное появление изображения
  }, 500); // Задержка совпадает с transition из CSS

  // Если текущее изображение первое
  if (currentIndex === 0) {
    btnLeft.classList.add("last");
    btnLeft.disabled = true;
  } else {
    btnLeft.classList.remove("last");
    btnLeft.disabled = false;
  }

  // Если текущее изображение последнее
  if (currentIndex === images.length - 1) {
    btnRight.classList.add("last");
    btnRight.disabled = true;
  } else {
    btnRight.classList.remove("last");
    btnRight.disabled = false;
  }
}

// Обработчики событий для кнопок
btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

btnRight.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Инициализация слайдера
updateSlider();

function preloadImages(...imagePaths) {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
}

preloadImages(...images);
