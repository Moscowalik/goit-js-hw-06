const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')
console.log(inputRef)

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.textContent = event.currentTarget.value
}