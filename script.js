function checkPasswordsMatch() {
    var password1 = passwordField.value;
    var password2 = passwordCheckField.value;
    if (password1 == password2) {
        passwordField.classList.remove('matching');
        passwordCheckField.classList.remove('matching');
        return true;
    } else {
        passwordField.classList.add('matching');
        passwordCheckField.classList.add('matching');
        return false;
    }
}

const passwordField = document.querySelector("#pass");
const passwordCheckField = document.querySelector("#pass2")



passwordField.addEventListener("keyup", (e) => {
    console.log(checkPasswordsMatch());
});

passwordCheckField.addEventListener("keyup", (e) => {
    console.log(checkPasswordsMatch());
});