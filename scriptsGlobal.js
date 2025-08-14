let slideIndex = 1;

showSlides(slideIndex);

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function plusSlides(x) {
    showSlides(slideIndex += x);
}

function currentSlide(x) {
    showSlides(slideIndex = x);
}

function showSlides(x) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Veirfica se a índice é maior ou menor que o número de slides e "dá a volta"
    if (x > slides.length) {
        slideIndex = 1;
    }
    else if (x < 1) {
        slideIndex = slides.length;
    }

    // Oculta os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}