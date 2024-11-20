// Toggle menu saat klik hamburger
document.getElementById('hamburger').addEventListener('click', function (event) {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    event.stopPropagation(); // Mencegah event bubbling ke document
});

// Hilangkan menu saat klik di luar
document.addEventListener('click', function (event) {
    var navLinks = document.getElementById('nav-links');
    var hamburger = document.getElementById('hamburger');
    
    // Pastikan klik di luar nav-links atau hamburger
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});


// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const button = document.getElementById("backToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll smoothly to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// about button
document.getElementById("webDevButton").addEventListener("click", function () {
    const webdevContent = document.getElementById("webdevContent");
    const cyberContent = document.getElementById("cyberContent");

    // Tampilkan konten Web Dev dan sembunyikan Cyber
    webdevContent.style.display = "block";
    cyberContent.style.display = "none";
});

document.getElementById("cyberButton").addEventListener("click", function () {
    const webdevContent = document.getElementById("webdevContent");
    const cyberContent = document.getElementById("cyberContent");

    // Tampilkan konten Cyber dan sembunyikan Web Dev
    webdevContent.style.display = "none";
    cyberContent.style.display = "block";
});
