
var root = document.querySelector(':root');
var desktopTheme = document.getElementById('theme-switch');
var mobileTheme = document.getElementById('mobile-theme-switch');

function setDefaultTheme() {
  //default theme
  localStorage.setItem("theme", "day-theme");
};

setDefaultTheme();

window.onload = loadTheme();

function loadTheme() {
  var localTheme = localStorage.getItem("theme");

  if(localTheme !== null && localTheme === "night-theme"){
    root.classList.remove("day-theme");
    root.classList.add(localTheme);
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

  const currentTheme = root.classList.contains("day-theme");

  if(currentTheme !== null && currentTheme === true){
    replaceTheme("day-theme","night-theme");
  }
  else{
    replaceTheme("night-theme","day-theme");
  }

};

// navbar and theme toggle is hidden on scroll
var navbars = document.querySelectorAll('navbar');
var themeToggle = document.querySelector('theme-toggle-button-container');
var hideScroll = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  navbars.forEach((nav) => {
    if(nav.style.display != "none"){
      if (hideScroll > window.scrollY) {
        nav.style.top = "0";
        //we will also update the Y position of the theme toggle here too
        themeToggle.style.bottom = "1.5rem";
      } 
      else {
        nav.style.top = "-10rem";
        themeToggle.style.bottom = "-6rem";
      }
    }
  })

  hideScroll = currentScrollPos;
};

const navItemBtns = document.querySelectorAll('menu-item-container'); 
const navPages = document.querySelectorAll("menu-item");
let currentURL = window.location.href;

// reading url to determine which buttons to highlight

function btnHighlighs (){
  // Removes the "menu-item-container-style" class from all buttons in the navItemBtns array using the forEach method.
  navItemBtns.forEach((btn) => {
    btn.classList.remove('menu-item-container-style');
  });

  navPages.forEach((page) => {
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

btnHighlighs();
