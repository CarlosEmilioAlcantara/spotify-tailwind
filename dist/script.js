const toggle = document.querySelector(".toggle-menu");
const headNav = document.querySelector(".header__nav");
const branding = document.querySelector(".branding")

toggle.addEventListener("click", () => {
    headNav.classList.toggle("open");
    branding.classList.toggle("open");
    toggle.classList.toggle("open");v
})