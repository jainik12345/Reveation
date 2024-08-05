let currentIndex = 0;
let autoChange;

const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function showDiv(index) {
  currentIndex = index;
  updateCarousel();
  resetAutoChange();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function autoChangeDiv() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function resetAutoChange() {
  clearInterval(autoChange);
  autoChange = setInterval(autoChangeDiv, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
  autoChange = setInterval(autoChangeDiv, 1000);

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      clearInterval(autoChange);
    });
    item.addEventListener("mouseout", () => {
      resetAutoChange();
    });
  });
});
