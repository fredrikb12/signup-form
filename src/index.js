const submitButton = document.querySelector("button");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const errorMessage = document.querySelector(".password-error-message");

let triedToSubmit = false;

submitButton.addEventListener("click", (e) => {

    if (pass.value !== confirmPass.value) {
        e.preventDefault();
        pass.classList.add("error");
        confirmPass.classList.add("error");
        errorMessage.classList.remove("hidden");
        triedToSubmit = true;
    }
});

pass.addEventListener("input", (e) => {
    if (!triedToSubmit) return;
    pass.classList.remove("error");
    confirmPass.classList.remove("error");
    errorMessage.classList.add("hidden");
});

confirmPass.addEventListener("input", (e) => {
    if(!triedToSubmit) return;
    pass.classList.remove("error");
    confirmPass.classList.remove("error");
    errorMessage.classList.add("hidden");
});

pass.addEventListener("change", (e) => {
    if(!triedToSubmit) return;
    if(pass.value !== "" && confirmPass.value !== "" && pass.value !== confirmPass.value) {
        pass.classList.add("error");
        confirmPass.classList.add("error");
        errorMessage.classList.remove("hidden");
    }
});

confirmPass.addEventListener("change", (e) => {
    if(!triedToSubmit) return;
    if(pass.value !== "" && confirmPass.value !== "" && pass.value !== confirmPass.value) {
        pass.classList.add("error");
        confirmPass.classList.add("error");
        errorMessage.classList.remove("hidden");
    }
});


