const textElement = document.querySelector(".stretch");

for (let i = 0; i < textElement.length; i++) {
  textElement[i].addEventListener("animationend", function (e) {
    textElement[i].classList.remove(".animated");
  });

  textElement[i].addEventListener("mouseover", function (e) {
    textElement[i].classList.add(".animated");
  });
}

// const letters = text.split('');

// let html = '';

// const makeSpan = letter => `<span class="rubber-letter">${letter}</span>`;

// letters.forEach(letter => (html += makeSpan(letter)));

// textElement.innerHTML = html;
