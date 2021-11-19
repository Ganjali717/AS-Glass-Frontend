const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const password2 = document.getElementById('password2');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Salam");
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();

    if (emailValue === '') {
        setErrorForEmail(email, 'Adinizi qeyd etmek mutleqdir');
    } else if (!isEmail(emailValue)) {
        setErrorForEmail(email, 'Email cannot valid');
    } else {
        setSuccesForEmail(email);
    }

    if (passwordValue === '') {
        setErrorForPassword(password, 'Sifreni qeyd etmek mutleqdir')
    } else {
        setErrorForPassword(password)
    }
}


function setErrorForEmail(input, message) {
    const formControl = input.parentElement;
    const smallemail = formControl.querySelector('.log-in-email');
    smallemail.innerText = message;
    formControl.className = 'form error'
}


function setErrorForPassword(input, message2){
    const formControl = input.parentElement;
    const smallpassword = formControl.querySelector('.log-in-password');
    smallpassword.innerText = message2;
    formControl.className = 'form error'
}


function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form success'
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}