const btn = document.querySelector('.header__menubtn')
const menu = document.querySelector('.header__mbtn')
const icon_menu= document.querySelector('#icon')
const icon_cancel= document.querySelector('#cancel')

icon_menu.addEventListener("click",  func)
function func(){
    menu.style.display = 'block';
    icon_menu.style.display = 'none';
    console.log('menu workign');
}
icon_cancel.addEventListener('click', func2)

function func2(){
    console.log('salm');
    menu.style.display = 'none';
    icon_menu.style.display = 'block';
}