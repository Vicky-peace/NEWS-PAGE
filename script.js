const  humberger = document.querySelector(".humberger");
const closeBtn = document.querySelector(".close");
const mobileMenu= document.querySelector(".navbar-mobile");


humberger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () =>{
    mobileMenu.classList.remove("open");
});