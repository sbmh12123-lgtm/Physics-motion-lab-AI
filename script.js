// Physics Motion Lab AI
// Created by Sharanabasava

console.log("Physics Motion Lab AI Loaded Successfully!");

// Smooth button animation

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

    }else{

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

});
