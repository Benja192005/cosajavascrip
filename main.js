let menuHamburguesa = document.getElementByI ("m3nu-hamburguesa");
let containermenu = document.getElementById("container-menu-desplegable");

menuHamburguesa.addEventListener("click",()=> {
    menuHamburguesa.classList.toggle("active");
    containermenu.classList.toggle("active");

});