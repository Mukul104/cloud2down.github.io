const searchicon = document.querySelector(".search-icon");
const searchcontainer = document.querySelector(".search-container")
const mobilemenunavbar = document.querySelector(".mobile-menu-navbar");
const mobilemenuicon = document.querySelector(".mobile-menu-icon");
const mobilemenuclose = document.querySelector(".mobile-menu-close");

searchicon.addEventListener("click", function () {
    searchcontainer.classList.toggle("active");
});

mobilemenuicon.addEventListener("click", function () {
    mobilemenunavbar.classList.add("active")
});
mobilemenuclose.addEventListener("click", function () {
    mobilemenunavbar.classList.remove("active")
});


// Slider 
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

showSlides();



