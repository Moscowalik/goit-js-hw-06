const buttonRef = document.querySelector('.change-color')
const spanRef = document.querySelector('.color')

function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
  return;
}

buttonRef.addEventListener('click', changeColor);
