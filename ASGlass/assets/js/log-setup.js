

    const form = document.getElementById('form');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        const fullnameValue = fullname.value.trim();
        const emailValue = email.value.trim();
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue === '') {
            setErrorForEmail(email, 'Email cannot blank');
        } else if (!isEmail(emailValue)) {
            setErrorForEmail(email, 'Email cannot valid');
        } else {
            setErrorForEmail(email);
        }

        if (passwordValue === '') {
            setErrorForPassword(password, 'Password cannot be blank')
        } else {
            setErrorForPassword(password)
        }


        if (fullnameValue === '') {
            setErrorForFirstname(fullname, 'FirstName cannot be blank')
        } else if (fullname.target.value.length < 2) {
            setErrorForFirstname(fullname, 'FirstName cannot be 2 character')
        }
        else {
            setErrorForFirstname(fullname)
        }

        if (usernameValue === '') {
            setErrorForLastName(username, 'LastName cannot be blank')
        } else if (username.target.value.length < 2) {
            setErrorForLastName(username, 'LastName cannot be 2 character')
        }
        else {
            setErrorForLastName(username)
        }
    }

    username.addEventListener('change', function (e) {
        if (e.target.value.length < 2) {
            setErrorForLastName(username, 'LastName cannot be 2 character')
        } else {
            setErrorForLastName(username)
        }
    });

    fullname.addEventListener('change', function (event) {
        if (event.target.value.length < 2) {
            setErrorForFirstname(fullname, 'FirstName cannot be 2 character')
        } else {
            setErrorForFirstname(fullname)
        }
    });


    function setErrorForEmail(input, message) {
        const formControl = input.parentElement;
        const smallemail = formControl.querySelector('.setup-email')

        smallemail.innerText = message;

        formControl.className = 'form error'
    }

    function setErrorForFirstname(input, message2) {
        const formControl = input.parentElement;
        const smallfirst = formControl.querySelector('.setup-firstname')

        smallfirst.innerText = message2;

        formControl.className = 'form error'
    }

    function setErrorForLastName(input, message3) {
        const formControl = input.parentElement;
        const smalllast = formControl.querySelector('.setup-lastname')

        smalllast.innerText = message3;

        formControl.className = 'form error'
    }

    function setErrorForPassword(input, message4) {
        const formControl = input.parentElement;
        const smallpassword = formControl.querySelector('.setup-password')

        smallpassword.innerText = message4;

        formControl.className = 'form error'
    }


    function setSuccesFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form success'
    }

    function isEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }