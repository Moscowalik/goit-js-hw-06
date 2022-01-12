const form = document.querySelector('.login-form')


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;


    if (password === '' || mail === '') {
            alert("Необходимо заполнить все поля")
    } else {
        const formData = { mail, password };
        form.reset()
        console.log(formData)
        return formData
    }
//     const formData = { mail, password }
//     const checkForm = (password === '' || mail === '') ? alert("Необходимо заполнить все поля") : formData && form.reset() 
//     console.log(formData)
//     return checkForm;
}

            
 

