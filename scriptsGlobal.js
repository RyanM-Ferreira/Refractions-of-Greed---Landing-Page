let slideIndex = 1;

showSlides(slideIndex);

var isActive = false;

const navBtns = document.querySelectorAll(".navBtn");

// Menuzinho Mobile
function alternateNav() {
    if (!isActive) {
        document.getElementById("mySidenav").style.height = "75%";
        document.getElementById("mySidenav").style.top = "0";

        navBtns.forEach(btn => {
            btn.addEventListener("click", alternateNav);
        });
    }
    else {
        document.getElementById("mySidenav").style.height = "0px";
        document.getElementById("mySidenav").style.top = "-16px";
    }

    isActive = !isActive;
}

function closeNav() {
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

    // Adiciona a classe "ativo" para o 'dot' correspondente ao slide.
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Nada demais, apenas um alerta
function comingSoon() {
    alert("Não finalizado. Disponível em breve...");
}

// Scroll Into View
document.querySelectorAll('#mySidenav [data-target], #mainButtons [data-target]').forEach(option => {
    option.addEventListener('click', e => {
        e.preventDefault();

        const optionID = option.getAttribute('data-target');
        const optionElement = document.getElementById(optionID);

        if (optionElement) {
            optionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});