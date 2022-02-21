let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click, (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
  horizontalUnderline.style.left = e.currentTarget.offSetLeft + "px";
  horizontalUnderline.style.width = e.currentTarget.offSetWidth + "px";
  horizontalUnderline.style.top =
    e.currentTarget.offSetTop + e.currentTarget.offSetHeight + "px";
}
