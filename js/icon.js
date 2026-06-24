document.querySelectorAll(".inputWrap").forEach((wrap) => {
  const input = wrap.querySelector("input");
  const icon = wrap.querySelector(".inputIcon");

  icon.addEventListener("click", () => {
    input.showPicker();
  });
});
