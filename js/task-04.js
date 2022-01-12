
const valueRef = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrValue = () => (valueRef.textContent = counterValue -= 1);
const incrValue = () => (valueRef.textContent = counterValue += 1);

decrementRef.addEventListener('click', decrValue);
incrementRef.addEventListener('click', incrValue);