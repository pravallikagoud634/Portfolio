<<<<<<< HEAD
// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease";
});

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

// Dynamic year in footer
const footer = document.querySelector("footer p");
footer.innerHTML = `&copy; ${new Date().getFullYear()} PRAVALLIKA SUDHAGONI. All rights reserved.`;
=======
// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease";
});

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

// Dynamic year in footer
const footer = document.querySelector("footer p");
footer.innerHTML = `&copy; ${new Date().getFullYear()} PRAVALLIKA SUDHAGONI. All rights reserved.`;
>>>>>>> a4362d1bd6556c015d3fc9e8b370fccad1cbac1e
