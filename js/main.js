document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  }
});
// Typewriter Loader Script
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typewriter-text");
  const preloader = document.getElementById("preloader");
  const textToType = "HOTEL ARYAN";
  let index = 0;

  function runTypewriter() {
    if (textElement && index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(runTypewriter, 110); // Speed: Har letter 110ms me type hoga
    } else {
      // Type hone ke baad 500ms ruk kar screen hide hogi
      setTimeout(() => {
        if (preloader) {
          preloader.classList.add("hide-loader");
        }
      }, 500);
    }
    // Rooms ki sabhi photos ko pehle se memory me load karne ke liye
if (typeof roomsData !== 'undefined') {
  roomsData.forEach(room => {
    if (room.images && Array.isArray(room.images)) {
      room.images.forEach(src => {
        const img = new Image();
        img.src = src; // Background me fetch ho jayegi
      });
    }
  });
}
  }

  runTypewriter();
});
