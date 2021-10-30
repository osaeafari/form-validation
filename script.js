const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //using Constraint API to check form validity
    isValid = form.checkValidity();
    
    //If the form isn't valid
    if(!isValid){
        //Style main message for error
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    //check to see if password fields match
    if (password1El.value === password2El.value){
        // if they match, set value to true and borders to green
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        //if they dont match, border color of input to red, change message
        passwordsMatch = false;
        message.textContent = 'Make sure paswords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match
    if(isValid && passwordsMatch){
        //Style main message for success
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    //Do something with user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    //validate form
    validateForm();
    //submit data if valid
    if(isValid && passwordsMatch) { storeFormData(); }
}

// Event Listener
form.addEventListener('submit', processFormData);