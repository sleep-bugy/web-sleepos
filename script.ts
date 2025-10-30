// script.js

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Menambahkan 'event listener' ke tombol hamburger
// Ini akan mendeteksi setiap kali tombol tersebut di-klik
hamburger.addEventListener("click", () => {
    // Menambah atau menghapus class 'active' saat di-klik
    // CSS akan menggunakan class 'active' ini untuk menampilkan/menyembunyikan menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})