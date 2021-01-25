let currentslide = 0;

// HTML elements
const slides = document.getElementsByClassName("slide");

// Functions
function nextslide() {
    console.log(currentslide);

    // Add the slide-visible class to show a slide
    slides[currentslide].classList.remove("slide-visible");
    if (currentslide == slides.length-1) {
        // Reset the counter to 0 (first slide)
        currentslide = 0;
    } else {
        currentslide +=1;
    }
    // Show the new slide
    slides[currentslide].classList.add("slide-visible");
}

setInterval(nextslide, 4000);
