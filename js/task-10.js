function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsBoxRef = document.querySelector('#controls')

const createButtonRef = document.querySelector('[data-create]')

const destroyButtonRef = document.querySelector('[data-destroy]')

const boxesRef = document.querySelector('#boxes')


function createBoxes(amount) {
    boxesRef.innerHTML = '';

    const num = controlsBoxRef.firstElementChild.value;
    const items = [];

    for (let i = 1; i <= num; i += 1) {
        const createBoxEl = document.createElement('div');

      createBoxEl.style.backgroundColor = getRandomHexColor();
      createBoxEl.textContent = getRandomHexColor()
      createBoxEl.style.width = (i * 10) + 20 + 'px';
      createBoxEl.style.height = (i * 10) + 20 + 'px';

        items.push(createBoxEl);
    }

    boxesRef.append(...items);
}

const destroyBoxes = () => {
    boxesRef.innerHTML = '';
}

createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);

