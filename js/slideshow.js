document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    setInterval(function(){ plusSlides(1) }, 6000);
});

let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("mySlides");

// Next/previous controls
function plusSlides(n) {
    slides[slideIndex-1].classList.add('fade-out');
    setTimeout(function() {
        slides[slideIndex-1].classList.remove('fade-out');
        showSlides(slideIndex += n);
    }, 1000); // same duration as the fade-out animation
}

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}