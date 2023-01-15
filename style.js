document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".new-price")) {
    document.querySelectorAll(".price").forEach((el) => {
      el.classList.add("crossed-out");
    });
  }
});