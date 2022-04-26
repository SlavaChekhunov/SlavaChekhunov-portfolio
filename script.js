const elements = document.getElementsByClassName('rubber-stretch');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('animationend', function (e) {
    elements[i].classList.remove('animated');
  });

  elements[i].addEventListener('mouseover', function (e) {
    elements[i].classList.add('animated');
  })
}

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector(".headerNav");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navLinks.classList.toggle("active");
    menuOpen = false;
  }
})

// const toggleIcon = document.getElementsByClassName("toggle-button")[0];

// toggleIcon.addEventListener("click", function () {
// });


window.onload = function () {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: "#08fdd8",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
      
    });
  } catch (e) {
    document.getElementById("myCanvasContainer").style.display = "none";
  }
};

