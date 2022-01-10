const inputRef = document.querySelector('#validation-input')
const inputDataREf = document.querySelector('[data-length="6"]')

console.log(inputRef.dataset.length)

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === parseInt(inputRef.dataset.length)) {
        inputRef.classList.add('valid') 
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
}
