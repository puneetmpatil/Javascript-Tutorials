console.log("This is index.js")

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validUser = false
let validEmail = false
let validPhone = false


name.addEventListener('blur', () => {
    console.log("Name is blurred")
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = name.value;

    if (regex.test(str)){
        console.log("Your name is valid")
        name.classList.remove('is-invalid')
        validUser = true
    }
    else{
        console.log("Your name is not valid")
        name.classList.add('is-invalid')
        validUser = false
    }
})
email.addEventListener('blur', () => {
    console.log("Email is blurred")

    // Validate email here
    let regex = /^([_\.\-a-zA-Z]+)@([_\.\-a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;

    if (regex.test(str)){
        console.log("Your email is valid")
        email.classList.remove('is-invalid')
        validEmail = true
    }
    else{
        console.log("Your email is not valid")
        email.classList.add('is-invalid')
        validEmail = false
    }
})
phone.addEventListener('blur', () => {
    console.log("Phone is blurred")

    // Validate phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value;

    if (regex.test(str)){
        console.log("Your phone is valid")
        validPhone = true
        phone.classList.remove('is-invalid')
    }
    else{
        console.log("Your phone is not valid")
        phone.classList.add('is-invalid')
        validPhone = false
    }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log("You clicked on submit")
    console.log(validEmail,validPhone,validUser)
    // Submit your form here
    let failure = document.getElementById('failure')
    let success = document.getElementById('success')
    if (validEmail && validUser && validPhone){
        success.classList.add('show')
        // failure.classList.remove('show')
        failure.alert('close')
        console.log('Phone,email and user are valid. Submitting form');
        
    }
    else{
        console.log("One of phone,email or user are not valid. Hence not submitting the form. Please correct the errors and try again")
        failure.classList.add('show')
        // success.classList.remove('show')
        success.alert('close')
    }
})