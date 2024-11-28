// JavaScript Document
console.log("Open");

const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");

menuButton.onclick = toggleMenu;

function toggleMenu() {
    deNav.classList.add("toonMenu");
}

const sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
    deNav.classList.remove("toonMenu");
}