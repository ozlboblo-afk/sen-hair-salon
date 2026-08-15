const tabs = document.querySelectorAll(".serviceTabs button");
const panels = document.querySelectorAll(".servicePanel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((btn) => {
      btn.classList.remove("is-active");
    });

    panels.forEach((panel) => {
      panel.classList.remove("is-active");
    });

    tab.classList.add("is-active");

    document
      .querySelector(`.servicePanel[data-panel="${target}"]`)
      .classList.add("is-active");
  });
});
