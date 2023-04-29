const menu = document.querySelector(".header__mbtn");
const icon_menu = document.querySelector("#icon");
const icon_cancel = document.querySelector("#cancel");

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






//////////////////////////////////////////////////////////////////////////
