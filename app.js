'use strict';

// window.addEventListener('scroll',function() {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.classList.add('hidden');
//     } else {
//         header.classList.remove('hidden');
//     }
// })

// window.addEventListener('hover',function() {

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
