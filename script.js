
function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function toggleVolume() {
    const video = document.getElementById("bg-video");
    const btn = document.getElementById("volume-btn");

    if (video.muted) {
        video.muted = false;
        btn.innerHTML = "🔊"; 
    } else {
        video.muted = true;
        btn.innerHTML = "🔇"; 
    }
}

