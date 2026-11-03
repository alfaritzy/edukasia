'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.remove("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.add("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


// Display button

function toggleButtonDisplay() {
  const hiddenButton = document.getElementById('hidden-btn');
  if (window.innerWidth <= 1200) {
    hiddenButton.style.display = 'block';
  } else {
    hiddenButton.style.display = 'none';
  }
}

// Jalankan saat halaman dimuat
toggleButtonDisplay();

// Jalankan saat ukuran layar berubah
window.addEventListener('resize', toggleButtonDisplay);


/* Animasi Flip Card */

// Mendapatkan elemen dengan class
// const flipCardInner = document.querySelector('.flip-card-inner');
// const showPrestasiBtn = document.querySelector('.btn-prestasi');
// const flipCard = document.querySelector('.flip-card');

// Fungsi untuk memutar card (flip)
// function flipCardAnimate() {
//   flipCardInner.style.transform = "rotateY(180deg)";
// }

// Fungsi untuk mengembalikan card ke posisi awal
// function resetFlipCard() {
//   flipCardInner.style.transform = "rotateY(0deg)";
// }

// Event listener untuk ketika "Lihat Prestasi" diklik
// showPrestasiBtn.addEventListener("click", function(event) {
//   event.stopPropagation(); // Menghentikan klik dari menyebar ke elemen lain
//   flipCardAnimate();
// });

// Event listener untuk area di luar flip-card agar kartu kembali ke posisi semula
// document.addEventListener("click", function(event) {
//   if (!flipCard.contains(event.target)) {
//     resetFlipCard(); // Jika klik di luar flip card, animasi kembali
//   }
// });

// Event listener untuk flip-card sendiri, agar bisa dikembalikan jika di klik area luar "Lihat Prestasi"
// flipCard.addEventListener("click", function() {
//   resetFlipCard();
// });

