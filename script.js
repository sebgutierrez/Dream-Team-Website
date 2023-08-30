
const root = document.querySelector(':root');
var desktopTheme = document.querySelector('.theme-switch');
var mobileTheme = document.querySelector('.mobile-theme-switch');
const desktopNavbar = document.querySelector('.navbar');
const desktopNavStyle = getComputedStyle(desktopNavbar);
const mobileNavbar = document.querySelector('.mobile-navbar');
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

var hideScroll = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if(desktopNavbar.style.display !== "none"){
    if (hideScroll > window.scrollY) {
      desktopNavbar.style.top = "0";
    } 
    else {
      desktopNavbar.style.top = "-10rem";
    }
  }
  hideScroll = currentScrollPos;
};

// reading url to determine which buttons to highlight

const desktopItemBtns = document.querySelectorAll('.menu-item-container'); 
const desktopPages = document.querySelectorAll('.menu-item');
const mobileItemBtns = document.querySelectorAll('.mobile-menu-item-container'); 
const mobilePages = document.querySelectorAll('.mobile-menu-item');
let currentURL = window.location.href;

function btnHighlighs (){
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
};

btnHighlighs();

// makes the names of the pages visible or unvisible when toggled

var menuSwitch = document.querySelector('.menu-switch');
var mobileMenuSwitch = document.querySelector('.mobile-menu-switch');

menuSwitch.addEventListener('click', () => {
  if(menuSwitch.checked){
    mobilePages.forEach((item) => {
      item.classList.remove('mobile-menu-item');
      item.classList.add('mobile-menu-item-after');
    });
  }
  else{
    mobilePages.forEach((item) => {
      item.classList.add('mobile-menu-item');
      item.classList.remove('mobile-menu-item-after');
    });
  }
});

// makes the names of the pages visible or unvisible when toggled

menuSwitch.addEventListener('click', () => {
  if(menuSwitch.checked){
    mobileMenuSwitch.style.setProperty("justify-content","flex-end");
  }
  else{
    mobileMenuSwitch.style.setProperty("justify-content","center");
  }
});