// SLIDER
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener('click', e => moveToLeft());
btnRight.addEventListener('click', e => moveToRight());

setInterval(() => {
    moveToRight();
}, 3000)

let operacion = 0,
    counter = 0;
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if(counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
    } else {
        counter++;

        operacion += widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

function moveToLeft() {
    counter--;
    if(counter < 0) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
    } else {
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

// ANIMACIONES

// Feed
window.addEventListener('scroll', function() {
    let feed = document.querySelector('.feed'),
        objPositionFeed = feed.getBoundingClientRect().top,
        screenSize1 = window.innerHeight / 3.5;

        if(objPositionFeed < screenSize1) {
            feed.style.animation = 'transition 600ms ease-out';
        }
});

// Contact
window.addEventListener('scroll', function() {
    let animate1 = document.querySelector('.old-man'),
        animate2 = document.querySelector('.open-envelope'),
        objPosition = animate1.getBoundingClientRect().top,
        screenSize2 = window.innerHeight / 3.5;

        if(objPosition < screenSize2) {
            animate1.style.animation = 'transition 800ms ease-out';
            animate2.style.animation = 'mover-l 800ms ease-out';
        }
});
