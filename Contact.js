function validateForm() {
    const name =
        document.getElementById("name").value;
    const surname =
        document.getElementById("surname").value;
    const email =
        document.getElementById("email").value;
		    const message =
        document.getElementById("message").value;

    const nameError =
        document.getElementById("name-error");
    const surnameError = document.getElementById(
        "surname-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
	    const messageError = document.getElementById(
        "message-error"
    );


    nameError.textContent = "";
    surnameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name .";
        isValid = false;
    }

    if (surname === "") {
        surnameError.textContent =
            "Please enter your surname.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
	    if (message === "") {
        messageError.textContent =
            "Please enter your message.";
        isValid = false;
    }


    return isValid;
}