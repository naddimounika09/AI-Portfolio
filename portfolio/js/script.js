// ==============================
// Typing Animation
// ==============================

const roles = [
    "Aspiring Software Engineer",
    "Python Developer",
    "AI & Machine Learning Enthusiast",
    "Frontend AI Engineering Intern",
    "Flask Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 100);
}

typeEffect();

// ==============================
// Navbar Background on Scroll
// ==============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(8,17,31,.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(8,17,31,.7)";
        navbar.style.boxShadow = "none";

    }

});

// ==============================
// Scroll Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// ==============================
// Floating Particles
// ==============================

const particleContainer = document.querySelector(".particles");

if (particleContainer) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDelay = Math.random() * 8 + "s";

        particle.style.animationDuration = (4 + Math.random() * 6) + "s";

        particleContainer.appendChild(particle);

    }

}

// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Button Hover Animation
// ==============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});