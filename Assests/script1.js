let currentIndex = 0;
const reviews = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showReview(currentIndex);
}

setInterval(nextReview, 1000); // Change review every 5 seconds

// Initialize the first review
showReview(currentIndex);




// SUPER START

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.className = i === index ? 'dot active' : 'dot';
    });
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
    resetInterval();
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

showSlide(slideIndex);
