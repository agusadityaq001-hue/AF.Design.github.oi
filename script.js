// NAVBAR

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 20){

    navbar.classList.add("nav-scroll");

  }else{

    navbar.classList.remove("nav-scroll");

  }

});

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

  if(mobileMenu.style.display === "flex"){

    mobileMenu.style.display = "none";

  }else{

    mobileMenu.style.display = "flex";

  }

});

// CLOSE MOBILE MENU

document.querySelectorAll("#mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.style.display = "none";

  });

});

// CUSTOM CURSOR

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if(window.innerWidth > 900){

  window.addEventListener("mousemove", (e) => {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({

      left:`${posX}px`,
      top:`${posY}px`

    },{

      duration:500,
      fill:"forwards"

    });

  });

}

// REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

// PARALLAX

const mockup = document.querySelector(".device-mockup");

window.addEventListener("mousemove", (e) => {

  if(window.innerWidth < 900) return;

  const x = (window.innerWidth / 2 - e.pageX) / 35;
  const y = (window.innerHeight / 2 - e.pageY) / 35;

  mockup.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// MAGNETIC BUTTON

const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {

  button.addEventListener("mousemove", (e) => {

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translate(0px,0px)";

  });

});

// FLOATING BOX

const floatingBoxes = document.querySelectorAll(".floating-box");

window.addEventListener("mousemove", (e) => {

  if(window.innerWidth < 900) return;

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  floatingBoxes.forEach((box, index) => {

    const speed = (index + 1) * 15;

    box.style.transform =
      `translate(${x * speed}px, ${y * speed}px)`;

  });

});

// ACTIVE NAV

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".desktop-menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if(link.getAttribute("href") === `#${current}`){

      link.classList.add("active-link");

    }

  });

});

// HERO BLUR

const blurPurple = document.querySelector(".blur-purple");
const blurBlue = document.querySelector(".blur-blue");

window.addEventListener("mousemove", (e) => {

  if(window.innerWidth < 900) return;

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blurPurple.style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  blurBlue.style.transform =
    `translate(-${x * 40}px, -${y * 40}px)`;

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({

      top:target.offsetTop - 80,
      behavior:"smooth"

    });

  });

});

// RIPPLE

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(button => {

  button.addEventListener("click", function(e){

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {

      ripple.remove();

    },600);

  });

});