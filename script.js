const log = document.querySelector("#log")
const backHome = document.querySelector("#backHome")
console.log(backHome)
const getStarted = document.querySelector("#getStarted")

if (log){
log.addEventListener("click", function (){
   window.location.href = "login.html"
})
}

if(backHome){
backHome.addEventListener("click", function (){
    window.location.href = "home.html"
})
}

if(getStarted){
getStarted.addEventListener("click", function (){
    window.location.href = "login.html"
})
}
// SELECT HTML ELEMENTS

let menuToggle = document.getElementById("menuToggle");
let headerMenu = document.getElementById("headerMenu");


// OPEN AND CLOSE MOBILE MENU

menuToggle.addEventListener("click", () => {

    headerMenu.classList.toggle("active");

    let isOpen = headerMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    // CHANGE HAMBURGER ICON

    if (isOpen) {

        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


// CLOSE MENU AFTER CLICKING A NAVIGATION LINK

let navLinks = document.querySelectorAll(".header-menu nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        headerMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});