const navBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav-links-wrapper");
const headerBtn = document.querySelector(".header-btn");
navBtn.addEventListener("click", function(){
    navBtn.classList.toggle("active")
    nav.classList.toggle("active")
    if (nav.classList.contains("active")) {
        headerBtn.style.display = "none";
    }
    else {
        headerBtn.style.display = "block";
    }
})

nav.addEventListener("click", function(){
    navBtn.classList.toggle("active")
    nav.classList.toggle("active")
    if (nav.classList.contains("active")) {
        headerBtn.style.display = "none";
    }
    else {
        headerBtn.style.display = "block";
    }
})

if (!window.location.href.includes("index")) {
    let sellers = document.querySelector('.s-link');
    let buyersbtn = document.querySelector('.b-link');
    let start = document.querySelector('.header-btn');
    sellers.addEventListener("click", e => {
       sessionStorage.setItem('pageLoad', 'true');
       sessionStorage.setItem('click', 'seller');
    })
    buyersbtn.addEventListener("click", e => {
       sessionStorage.setItem('pageLoad', 'true');
       sessionStorage.setItem('click', 'buyer');
    })
    start.addEventListener("click", e => {
       sessionStorage.setItem('pageLoad', 'true');
       sessionStorage.setItem('click', 'start');
    })
}

