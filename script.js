
const root = document.querySelector(':root');
var desktopTheme = document.querySelector('.theme-toggle');
const desktopNavbar = document.querySelector('.navbar');

window.onload = loadTheme();

function loadTheme() {
  const localTheme = localStorage.getItem("theme");
  if(localTheme !== null && localTheme === "night-theme"){
    root.classList.remove("day-theme");
    root.classList.add(localTheme);
    desktopTheme.checked = true;
  } 
  // day theme is default, no need to load it.
};

//helper function

function replaceTheme(a, b) {
  root.classList.remove(a);
  root.classList.add(b);
  localStorage.setItem("theme", b);
};

function changeThemes() {
  if(desktopTheme.checked){
    replaceTheme("night-theme","day-theme");
  }
  else{
    replaceTheme("day-theme","night-theme");
  }
};

var openMenuSVG = document.querySelector('.open-menu-svg');
var closeMenuSVG = document.querySelector('.close-menu-svg');
var menuToggle = document.getElementById('mobile-menu-toggle');
function changeMenuToggleStyle() {
  if(menuToggle.checked){
    openMenuSVG.style.display = "none";
    closeMenuSVG.style.display = "block";
  }
  else{
    openMenuSVG.style.display = "block";
    closeMenuSVG.style.display = "none";
  }
}
menuToggle.addEventListener('click', changeMenuToggleStyle);

const nightIcon = document.getElementById('night-theme-icon');
const dayIcon = document.getElementById('day-theme-icon');

nightIcon.addEventListener('click', changeThemes);
dayIcon.addEventListener('click', changeThemes);

// navbar and theme toggle is hidden on scroll
/*
var hideScroll = window.scrollY;

window.onscroll = function() {
  const pageWidth  = document.body.clientWidth;
  var currentScrollPos = window.scrollY;
  if(desktopNavbar.style.display !== "none" && pageWidth > 870){
    if (hideScroll > window.scrollY) {
      desktopNavbar.style.top = "0";
    } 
    else {
      desktopNavbar.style.top = "-10rem";
    }
  }
  hideScroll = currentScrollPos;
};
*/
// reading url to determine which buttons to highlight

const desktopItemBtns = document.querySelectorAll('.menu-item-container'); 
const desktopPages = document.querySelectorAll('.menu-item');
let currentURL = window.location.href;

function btnHighlighs (){
  if(desktopNavbar.style.display !== null){
    desktopItemBtns.forEach((btn) => {
      btn.classList.remove('menu-item-container-style');
    });
    desktopPages.forEach((page) => {
      let navPage = page.dataset.id;
      if(currentURL.includes("index") && navPage == "home"){
        let parent = page.parentElement;
        parent.classList.add('menu-item-container-style');
      }
      else if(currentURL.includes(navPage)){
        let parent = page.parentElement;
        parent.classList.add('menu-item-container-style');
      }
    });
  }
};

btnHighlighs();