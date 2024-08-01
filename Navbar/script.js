const menuToggle = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".menu-item");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("showing");
});

menuItems.forEach((item) => {
  item.addEventListener("hover,click", (e) => {
    const dropdown = item.nextElementSibling;
    const arrow = item.querySelector(".arrow");

    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      arrow.classList.remove("rotate");
    } else {
      dropdown.style.display = "block";
      arrow.classList.add("rotate");
    }

    e.stopPropagation();
  });
});
