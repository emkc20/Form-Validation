const form1 = document.getElementById("form1");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const eMail = document.getElementById("email");
const checkbox = document.getElementById("checkbox");


form1.addEventListener("submit", (e) => {
    e.preventDefault();


    checkInputs();
});



const checkInputs = () => {

    const usernameValue = userName.value;
    const emailValue = eMail.value;
    const passwordValue = password.value;
    const checkboxChecked = checkbox.checked;

    if (usernameValue === '') {
        setErrorFor(userName, "Kullanıcı adı boş olamaz.");
    } else {
        setSuccesFor(userName);
    }

    if (emailValue === '') {
        setErrorFor(eMail, 'Email boş olamaz')
    } else if (!isEmail(emailValue)) {
        setErrorFor(eMail, 'Email adresinde @ işareti olmalı.')
    } else {
        setSuccesFor(eMail)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Parola boş olamaz.')
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Parola 8 karekterden küçük olamaz.')
    } else {
        setSuccesFor(password);
    }

    if (checkboxChecked === false) {
        setErrorFor(checkbox, 'Checkebox boş olamaz.')
    } else {
        setSuccesFor(checkbox);
    }


}

const setErrorFor = (input, message) => {
    const formPart = input.parentElement;
    const span = formPart.querySelector('span');
    formPart.className = 'form-part error';
    span.textContent = message;
    setTimeout(function () {
        formPart.classList.remove("error");
    }, 1500);

}

function setSuccesFor(input) {
    const formPart = input.parentElement;
    formPart.className = 'form-part succes';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});




