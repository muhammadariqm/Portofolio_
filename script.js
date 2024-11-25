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

// tetx animasi
const text = "Muhammad Ariq Mubarak";
const span = document.querySelector(".nama span");

let index = 0;
let isDeleting = false;

function typeEffect() {
  let delay = 100; // Kecepatan mengetik default
  let cursor = "|"; // Simbol kursor

  if (!isDeleting) {
    // Mengetik teks
    span.textContent = text.slice(0, index + 1) + cursor;
    index++;
  } else {
    // Menghapus teks
    span.textContent = text.slice(0, index) + cursor;
    index--;
    delay = 50; // Kecepatan lebih cepat saat menghapus
  }

  // Jeda saat selesai mengetik seluruh teks
  if (index === text.length) {
    isDeleting = true;
    delay = 1500; // Jeda 1.5 detik sebelum menghapus
  }

  // Jeda saat selesai menghapus seluruh teks
  if (index === 0 && isDeleting) {
    isDeleting = false;
    delay = 1000; // Jeda 1 detik sebelum mengetik ulang
    span.textContent = cursor; // Tampilkan hanya kursor
  }

  setTimeout(typeEffect, delay); // Menjadwalkan ulang fungsi
}

document.addEventListener("DOMContentLoaded", typeEffect);

// 
document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll(".isi p");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0; // Lebih responsif saat elemen masuk viewport
    }
  
    function handleScroll() {
      paragraphs.forEach((para, index) => {
        if (isInViewport(para)) {
          if (!para.classList.contains("show")) {
            // Menambahkan kelas show saat paragraf masuk viewport
            para.classList.add("show");
  
            // Menambahkan kelas left atau right berdasarkan urutan
            if (index % 2 === 0) {
              para.classList.add("left");
            } else {
              para.classList.add("right");
            }
          }
        }
      });
    }
  
    // Jalankan saat scroll
    window.addEventListener("scroll", handleScroll);
  
    // Jalankan pengecekan saat halaman pertama kali dimuat
    handleScroll();
  });
  