const mob_nav = document.querySelector(".navbar-mobile-btn");
const nav_header = document.querySelector(".header2");
const toggleNavbar= ()=>{
    nav_header.classList.toggle("active");
}
mob_nav.addEventListener("click", ()=> toggleNavbar());