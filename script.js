
const navBtns = document.querySelectorAll('nav-list'); // select parent container of buttons
const allSections = document.querySelector('.main-content'); // select all sections in webpage

// Sections Active (code for single page website scroll)

// "target" refers to element where the event occured & "dataset" refers to data-id element 
/*
function PageTransitions() {
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {

      // Removes the "active" class from all buttons in the sectBtns array using the forEach method.
      navBtns.forEach((btn) => {
        btn.classList.remove('active')
      });

      // Adds the "active" class to the clicked button using e.target.classList.add('active').
      e.target.classList.add('active');

      // Removes the "active" class from all sections in the sections array using the forEach method.
      sections.forEach((section) => {
        section.classList.remove('active')
      });

      // Adds the "active" class to the section with the corresponding id using 
      const element = document.getElementById(id);
      element.classList.add('active');

      // Scroll to the active class on click
      element.scrollIntoView({ behavior: "smooth" });

    }
  })
};

PageTransitions();*/

const toggle = document.querySelector('.menu-toggle'); 
var navbars = document.querySelectorAll('.navbar');
var hideScroll = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  const checked = document.getElementById("nav-toggle").checked;
  
  navbars.forEach((nav) => {
    if(nav.style.display != "none"){
      if (hideScroll > window.scrollY && checked == false) {
        nav.style.top = "0";
      } 
      else {
        if(checked == false){
          nav.style.top = "-10rem";
        }
      }
    }
  })

  hideScroll = currentScrollPos;
};

const navItemBtns = document.querySelectorAll('.menu-item-container'); 
const navPages = document.querySelectorAll(".menu-item");
let currentURL = window.location.href;

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
