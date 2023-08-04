const toggleButton = document.getElementById("hamburger-icon");
const navbarLinks = document.getElementById("main-nav");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
