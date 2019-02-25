//Select DOM element
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    setMenuTrue();
  } else {
    setMenuFalse();
  }
}

function setMenuTrue() {
  menuBtn.classList.add("close");
  menu.classList.add("show");
  menuBranding.classList.add("show");
  menuNav.classList.add("show");
  navItem.forEach(item => item.classList.add("show"));

  //Menu State
  showMenu = true;
}

function setMenuFalse() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuBranding.classList.remove("show");
  menuNav.classList.remove("show");
  navItem.forEach(item => item.classList.remove("show"));

  //Menu State
  showMenu = false;
}
