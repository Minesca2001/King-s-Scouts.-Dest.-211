// Get the current year for the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Get the back-to-top button
const backToTopButton = document.getElementById('back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function() {
    // Smooth scroll using scrollIntoView
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fallback for older browsers or if scrollIntoView isn't smooth enough
    // document.documentElement.scrollIntoView({ behavior: 'smooth' }); // No need for this fallback with window.scrollTo
}

console.log("Website script loaded.");