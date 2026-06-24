const tabs = document.querySelectorAll(".styleCategory button");
const cards = document.querySelectorAll(".stylePageCard");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    tabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    cards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
