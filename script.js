
const elements = document.getElementsByClassName('rubber-stretch');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('animationend', function (e) {
    elements[i].classList.remove('animated');
  });

  elements[i].addEventListener('mouseover', function (e) {
    elements[i].classList.add('animated');
  })
}

//tagCloud
const Texts = [
  "HTML5",
  "CSS3",
  "JAVASCRIPT",
  "Git",
  "REACT",
  "SASS",
  "GitHub",
  "JSON",
  "ES5/ES6",
  "Firebase",
  "Rest APIs",
  "JQUERY",
  "npm",
];

let tagCloud = new TagCloud('.Sphere', Texts, {
  radius: 200,
  maxSpeed: 'normal',
  initSpeed: 'fast',
  direction: 135,
  keep: true,
});

const color = 'green';
document.querySelector('.Sphere').style.color = color;
//tagCloud done

//mouseOver image effect

// let container = document.querySelector('.headerImage');
// let image = container.querySelector('.image-container')

// container.addEventListener('mouseover', function(e) {
//   console.log(e)
//   const X = window.innerWidth - e.pageX;
//   const Y = window.innerHeight - e.pageY;

//   image.style.transform = `translateX(${X})` + `translateY(${Y})`
// })
