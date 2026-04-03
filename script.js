const typingText = "Sugh - Frontend Developer";
let typingIndex = 0;
const typingSpeed = 80; // milliseconds per character

function typeAnimation() {
    const typingElement = document.getElementById("typing");
    if (typingIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeAnimation, typingSpeed);
    }
}

window.addEventListener("load", typeAnimation);

// Smooth scrolling with offset for sticky header
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80; // height of sticky header
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
const loadMoreBtn = document.getElementById("loadMoreBtn");

loadMoreBtn.addEventListener("click", () => {

const hiddenProjects = document.querySelectorAll(".extra-project");

hiddenProjects.forEach(project => {
project.style.display = "block";
});

loadMoreBtn.style.display = "none";

});