function checkPasswordsMatch() {
    var password1 = passwordField.value;
    var password2 = passwordCheckField.value;
    if (password1 == password2) {
        passwordField.classList.remove('not-matching');
        passwordCheckField.classList.remove('not-matching');
        return true;
    } else {
        passwordField.classList.add('not-matching');
        passwordCheckField.classList.add('not-matching');
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