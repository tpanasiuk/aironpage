let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

// Get the container element
let navContainer = document.getElementById("nav");

// Get all buttons with class="btn" inside the container
let navs = navContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}