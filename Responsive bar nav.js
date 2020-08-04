const navSlide = function () {
//select the elements
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');
    //then add event listener
    burger.addEventListener('click', () => {
    //then add a classlist of toggle
        nav.classList.toggle("nav-active");
    });
    //select each links
    navLinks.forEach((link, index) => {
    //what is index 
    //the index is going to show you how many links you have
       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;  
    });
}

navSlide();

