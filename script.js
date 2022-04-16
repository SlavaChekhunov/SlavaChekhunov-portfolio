
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
  "Git & Command Line",
  "REACT",
  "SASS",
  "GitHub",
  "Pair-Programming",
  "Responsive Design",
  "Firebase",
  "Rest APIs",
  "JQUERY",
  "Version Control",
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
