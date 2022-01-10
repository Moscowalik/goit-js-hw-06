const inputRef = document.querySelector('#font-size-control')

const spanRef = document.querySelector('#text')

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.setAttribute('style', `font-size: ${event.target.value}px`)
}

