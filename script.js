//SLIDER WITH REVIEWS
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}


//ACTIVE LINK STYLES
// Get the container element
let navContainer = document.getElementById("nav");

// Get all buttons with class="btn" inside the container
let navs = navContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}


//TOP BUTTON
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//MODAL
// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let item1 = document.getElementById("work-item-1");
let item2 = document.getElementById("work-item-2");
let item3 = document.getElementById("work-item-3");
let item4 = document.getElementById("work-item-4");
let item5 = document.getElementById("work-item-5");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
item1.onclick = function () {
    modal.style.display = "block";
};
item2.onclick = function () {
    modal.style.display = "block";
};
item3.onclick = function () {
    modal.style.display = "block";
};
item4.onclick = function () {
    modal.style.display = "block";
};
item5.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


//RESPONSIVE NAVBAR

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

//SHOW NAVBAR
navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active-nav');
});

//REMOVE NAVBAR ON CLICK
mainNav.addEventListener('click', function () {

    mainNav.classList.remove('active-nav');
});
