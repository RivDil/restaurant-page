import './style.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { location } from './location.js';
const content = document.getElementById('content');

const homeButton = document.getElementById("homeTab");
const menuButton = document.getElementById("menuTab");
const locationButton = document.getElementById("locationTab");

home();


homeButton.addEventListener("click", function(event){
    content.innerHTML = '';
    home();
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    locationButton.classList.remove("active");
});
menuButton.addEventListener("click", function(event){
    content.innerHTML = '';
    menu();
    menuButton.classList.add("active");
    homeButton.classList.remove("active");
    locationButton.classList.remove("active");
});
locationButton.addEventListener("click", function(event){
    content.innerHTML = '';
    location();
    locationButton.classList.add("active");
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
});

