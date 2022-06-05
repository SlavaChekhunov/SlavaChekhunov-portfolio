const elements = document.getElementsByClassName('rubber-stretch');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('animationend', function (e) {
    elements[i].classList.remove('animated');
  });

  elements[i].addEventListener('mouseover', function (e) {
    elements[i].classList.add('animated');
  })
}

const menu = document.querySelector('.btn');
const navLinks = document.querySelector(".menu");
const menuList = document.querySelector('.menu_list')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  navLinks.classList.toggle('is-active');
})

menuList.addEventListener('click', () => {
  menu.classList.remove('is-active')
  navLinks.classList.remove('is-active')
})




const portfolio = document.querySelector('.portfolioOne');
const portfolioTwo = document.querySelector('.portfolioTwo');
const portfolioThree = document.querySelector('.portfolioThree');
const portfolioFour = document.querySelector('.portfolioFour');

const modal = document.querySelector('.modalOne');
const modalTwo = document.querySelector('.modalTwo');
const modalThree = document.querySelector('.modalThree');
const modalFour = document.querySelector('.modalFour');



portfolio.addEventListener('click', () => {
  modal.classList.toggle('modal-active');
})

portfolioTwo.addEventListener('click', () => {
  modalTwo.classList.toggle('modal-active');
})

portfolioThree.addEventListener('click', () => {
  modalThree.classList.toggle('modal-active');
})

portfolioFour.addEventListener('click', () => {
  modalFour.classList.toggle('modal-active');
})



window.onload = function () {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: "#084b6d",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.12,
      weight: true,
      textHeight: 45,
      textFont: "Karla, sans-serif",
    });
  } catch (e) {
    document.getElementById("myCanvasContainer").style.display = "none";
  }
};

