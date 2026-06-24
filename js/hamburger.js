const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".headerMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  headerMenu.classList.toggle("is-open");
});
