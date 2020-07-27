// Burger menu animation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    // TODO: Make the closing animation for the links better
    // TODO: Make the menu close with a link press
    // Toggle the menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animation for links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.35s ease forwards ${index / 7 + 0.5}s`;
            }
        })

        // Burger to X Animation
        burger.classList.toggle('toggle');
    });
}

// const navClose = () => {
//     const navLinksMenu = document.querySelector('nav-links');

//     window.addEventListener('mouseup', (event) => {
//         if (event.target != navLinksMenu) {
//             navLinksMenu.classList.toggle('nav-active')
//         }
//     });
// }

/******* Changing from BW image to color on hover *******/
// Weather App Icons
const htmlLogo1 = document.querySelector("#html-logo1");
const cssLogo1 = document.querySelector("#css-logo1");
const javascriptLogo1 = document.querySelector("#js-logo1");

const setToColor1 = (icon) => {
    htmlLogo1.src = `./img/HTML5-logo.png`;
    cssLogo1.src = `./img/CSS3-logo.png`;
    javascriptLogo1.src = `./img/JavaScript-logo.png`;
}

const setToBW1 = (icon) => {
    htmlLogo1.src = `./img/HTML5-logo-bw.png`;
    cssLogo1.src = `./img/CSS3-logo-bw.png`;
    javascriptLogo1.src = `./img/JavaScript-logo-bw.png`;
}

// Portfolio Icons
const htmlLogo2 = document.querySelector("#html-logo2");
const cssLogo2 = document.querySelector("#css-logo2");
const javascriptLogo2 = document.querySelector("#js-logo2");

const setToColor2 = (icon) => {
    htmlLogo2.src = `./img/HTML5-logo.png`;
    cssLogo2.src = `./img/CSS3-logo.png`;
    javascriptLogo2.src = `./img/JavaScript-logo.png`;
}

const setToBW2 = (icon) => {
    htmlLogo2.src = `./img/HTML5-logo-bw.png`;
    cssLogo2.src = `./img/CSS3-logo-bw.png`;
    javascriptLogo2.src = `./img/JavaScript-logo-bw.png`;
}

navSlide();
//navClose();
