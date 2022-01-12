const inputBoxRef = document.querySelector('input')
const createButtonRef = document.querySelector('[data-create]')
const destroyButtonRef = document.querySelector('[data-destroy]')
const boxesRef = document.querySelector('#boxes')

const createBoxesBtnClick = () => { createBoxes(Number(inputBoxRef.value)); inputBoxRef.value = '';}

function createBoxes(amount) {
    boxesRef.innerHTML = '';
    const items = [];
   
    for (let i = 1; i <= amount; i += 1) {
      const createBoxEl = document.createElement('div');
      let boxElsize = (i * 10) + 20 + 'px';
      
      createBoxEl.style.backgroundColor = getRandomHexColor();
      createBoxEl.textContent = getRandomHexColor()
      createBoxEl.style.width = boxElsize;
      createBoxEl.style.height = boxElsize;

        items.push(createBoxEl);
    }

    boxesRef.append(...items);
}

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
  inputBoxRef.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createButtonRef.addEventListener('click', createBoxesBtnClick);
destroyButtonRef.addEventListener('click', destroyBoxes);
