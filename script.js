let menuBtn = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  if (navLinks.style.display == "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});

window.onresize = function () {
  if (window.innerWidth > 768) {
    navLinks.style.display = "block";
  }
};
