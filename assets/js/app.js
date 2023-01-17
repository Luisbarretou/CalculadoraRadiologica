// addEventListener('DOMContentLoaded', () => {
//     var btnMenu = document.querySelector('.btn-menu');
//     if(btnMenu) {
//         btnMenu.addEventListener('click', () => {
//             const menuItems = document.querySelector('.menu-items');
//             menuItems.classList.toggle('show');
//         })
//     }
// })


// const btnSubMenu = document.querySelectorAll('.submenu-btn');
// for( let i= 0; i < btnSubMenu.length; i++){
//     btnSubMenu[i].addEventListener('click', function() {
//         const menuItems = document.querySelector('.submenu');
//             menuItems.classList.toggle('mostrar');
//     });
// }


const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function() {
        if(window.innerWidth < 1000) {
            const subMenu = subMenuBtn[i].nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}

//Search
document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});