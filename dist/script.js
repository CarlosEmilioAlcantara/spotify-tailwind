const toggle = document.querySelector(".toggle-menu");
const headNav = document.querySelector(".header__nav");
const branding = document.querySelector(".branding")
const body = document.querySelector(".body");

toggle.addEventListener("click", () => {
    headNav.classList.toggle("open");
    branding.classList.toggle("open");
    toggle.classList.toggle("open");
    body.classList.toggle("open");
})