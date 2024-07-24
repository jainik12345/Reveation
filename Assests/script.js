document.getElementById("navbar-toggle").addEventListener("click", function () {
  var navList = document.getElementById("nav-list");
  navList.classList.toggle("show");
});

// REVIEW PAGE JAVASCRIPT

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

setInterval(nextReview, 5000); // Change review every 5 seconds

// Initialize the first review
showReview(currentIndex);

// REVIEW PAGE JAVASCRIPT END
