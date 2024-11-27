// Carrossel com pausa ao passar o cursor
let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function startSlides() {
    slideInterval = setInterval(showSlides, 4000);
}

function stopSlides() {
    clearInterval(slideInterval);
}

document.getElementById("carrossel").addEventListener("mouseover", stopSlides);
document.getElementById("carrossel").addEventListener("mouseout", startSlides);

// Inicia o carrossel
showSlides();
startSlides();

// Checklist com rabisco
const checkboxes = document.querySelectorAll('.checklist-container input');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const label = this.nextElementSibling;
        if (this.checked) {
            label.classList.add('line-through');
        } else {
            label.classList.remove('line-through');
        }
    });
});
