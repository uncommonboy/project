const btn = document.querySelector(".header__menubtn");
const menu = document.querySelector(".header__mbtn");
const icon_menu = document.querySelector("#icon");
const icon_cancel = document.querySelector("#cancel");
const items = document.querySelectorAll(".js-item");

icon_menu.addEventListener("click", func);
function func() {
  menu.style.display = "block";
  menu.style.position = "absolute";
  menu.style.right = "0px";
  icon_menu.style.display = "none";
  // console.log('all workign');
}

icon_cancel.addEventListener("click", func2);

function func2() {
  menu.style.display = "none";
  icon_menu.style.display = "block";
}

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    console.log("ishledi");
    alert("Please first Log-In to see your blongings!");
  });
}

const button = document.querySelector(".subscribe__button");
button.addEventListener("click", () => {
  const inp = document.querySelector(".subscribe__input");
  inp.value = null;
  alert("response send successfully!");
  console.log(inp.value);
});
