
var root = document.querySelector(':root');
var theme = document.getElementById('theme-switch');

window.onload = loadTheme();

function loadTheme() {
  const localTheme = localStorage.getItem("theme");

  if(localTheme !== null && localTheme === "night-theme"){
    root.classList.remove("day-theme");
    root.classList.add(localTheme);

    theme.checked = true;
  } 
  // day theme is default, no need to load it.
}

function changeThemes() {
  if(theme.checked){
    root.classList.remove('night-theme');
    root.classList.add('day-theme');
    localStorage.setItem("theme", "day-theme");

    theme.checkbox = false;
  }
  else{
    root.classList.remove('day-theme');
    root.classList.add('night-theme');
    localStorage.setItem("theme", "night-theme");

    theme.checkbox = true;
  }
};

// navbar is hidden on scroll
var navbars = document.querySelectorAll('.navbar');
var hideScroll = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  navbars.forEach((nav) => {
    if(nav.style.display != "none"){
      if (hideScroll > window.scrollY) {
        nav.style.top = "0";
      } 
      else {
        nav.style.top = "-10rem";
      }
    }
  })

  hideScroll = currentScrollPos;
};

const navItemBtns = document.querySelectorAll('.menu-item-container'); 
const navPages = document.querySelectorAll(".menu-item");
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
