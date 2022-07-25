//dodać sprawdzenie czy hasła o id password i passwordConfirm są identyczne. Onclick submit

let pass1 = document.getElementById("password");
let pass2 = document.getElementById("passwordConfirm");
let submit = document.getElementById("submit");

function check() {
    if (pass1.value === pass2.value) {
        submit.disabled = false;
        pass1.style.border = '2px solid lightgreen';
        pass2.style.border = '2px solid lightgreen';
    } else {
        submit.disabled = true;
        pass1.style.border = '2px solid red';
        pass2.style.border = '2px solid red';
    }
}

