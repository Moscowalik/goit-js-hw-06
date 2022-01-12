const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

const DEFAULT_NAME = 'Anonymous'

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.textContent = event.currentTarget.value || DEFAULT_NAME;
}