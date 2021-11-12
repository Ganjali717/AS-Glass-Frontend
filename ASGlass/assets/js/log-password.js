

    const form = document.getElementById('form');
    const email = document.getElementById('email');



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        const emailValue = email.value.trim();

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email cannot valid');
        } else {
            setSuccesFor(email);
        }
    }


    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message;

        formControl.className = 'form error'
    }


    function setSuccesFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form success'
    }

    // function isEmail(email) {
    //     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    // }