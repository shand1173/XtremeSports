// HTML elements
const toggleButton = document.getElementById("nav-toggle");
const sideNav = document.getElementById("side-nav");
// Functions
function toggleSideNav() {
    // I don't use classes much so using classList[0] always works

    // Add/remove the nav-hidden class to toggle the navbar 
    if (sideNav.classList[0] == "nav-hidden") {
        // Hide the navbar
        document.getElementById("side-nav").classList.remove("nav-hidden");
        toggleButton.classList.add("rotated");

    } else {
        // Enable the navbar
        sideNav.classList.add("nav-hidden");
        toggleButton.classList.remove("rotated");
    }
}

toggleButton.addEventListener("click", toggleSideNav);
