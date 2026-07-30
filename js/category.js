const categoryButtons = document.querySelectorAll(".styleCategory button");
const styleItems = document.querySelectorAll(".styleItem");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("is-active");
    });

    button.classList.add("is-active");

    const filter = button.dataset.filter;

    styleItems.forEach((item) => {
      const category = item.dataset.category;

      if (filter === "all" || category === filter) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});
