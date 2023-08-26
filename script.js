
const root = document.querySelector(':root');
const desktopTheme = document.querySelector('.theme-switch');
const mobileTheme = document.querySelector('.mobile-theme-switch');
const desktopNavbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.mobile-navbar');
const desktopNavStyle = getComputedStyle(desktopNavbar);
const mobileNavStyle = getComputedStyle(mobileNavbar);

window.onload = loadTheme();

function loadTheme() {
  const localTheme = localStorage.getItem("theme");

  if(localTheme !== null && localTheme === "night-theme"){
    root.classList.remove("day-theme");
    root.classList.add(localTheme);

    desktopTheme.checked = true;
    mobileTheme.checked = true;
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
  //check if it's on desktop view

  if(desktopNavStyle.display !== null && desktopNavStyle.display === "flex"){
    if(desktopTheme.checked){
      replaceTheme("night-theme","day-theme");
      mobileTheme.checked = false;
    }
    else{
      replaceTheme("day-theme","night-theme");
      mobileTheme.checked = true;
    }
  }
  
  if(mobileNavStyle.display !== null && mobileNavStyle.display === "flex"){
    if(mobileTheme.checked){
      replaceTheme("night-theme","day-theme");
      desktopTheme.checked = false;
    }
    else{
      replaceTheme("day-theme","night-theme");
      desktopTheme.checked = true;
    }
  }

};

// navbar and theme toggle is hidden on scroll
const themeToggle = document.querySelector('.theme-toggle-button-container');
var hideScroll = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  if(desktopNavbar.style.display !== "none"){
    if (hideScroll > window.scrollY) {
      desktopNavbar.style.top = "0";
      //we will also update the Y position of the theme toggle here too
      themeToggle.style.bottom = "1.5rem";
    } 
    else {
      desktopNavbar.style.top = "-10rem";
      themeToggle.style.bottom = "-6rem";
    }
  }

  hideScroll = currentScrollPos;
};

const desktopItemBtns = document.querySelectorAll('.menu-item-container'); 
const desktopPages = document.querySelectorAll('.menu-item');
const mobileItemBtns = document.querySelectorAll('.mobile-menu-item-container'); 
const mobilePages = document.querySelectorAll('.mobile-menu-item');
let currentURL = window.location.href;

// reading url to determine which buttons to highlight

function btnHighlighs (){
  // Removes the "(mobile-)menu-item-container-style" class from all buttons in the navItemBtns array
  
  if(desktopNavStyle.display !== null && desktopNavStyle.display === "flex"){
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

  if(mobileNavStyle.display !== null && mobileNavStyle.display === "flex"){
    mobileItemBtns.forEach((btn) => {
      btn.classList.remove('mobile-menu-item-container-style');
    });
    mobilePages.forEach((page) => {
      let navPage = page.dataset.id;
      if(currentURL.includes("index") && navPage == "home"){
        let parent = page.parentElement;
        parent.classList.add('mobile-menu-item-container-style');
      }
      else if(currentURL.includes(navPage)){
        let parent = page.parentElement;
        parent.classList.add('mobile-menu-item-container-style');
      }
    });
  }

}

btnHighlighs();