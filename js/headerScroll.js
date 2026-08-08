const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 80);
});
