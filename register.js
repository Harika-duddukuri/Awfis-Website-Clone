let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword =
        document.getElementById("confirmPassword").value;
    let agreement =
        document.getElementById("agreement").checked;
    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText =
            "Name is required";

        valid = false;
    } else {

        document.getElementById("nameError").innerText = "";

    }
    if (!/^[0-9]{10}$/.test(mobile)) {

        document.getElementById("mobileError").innerText =
            "Enter a valid 10 digit mobile number";

        valid = false;

    } else {
        document.getElementById("mobileError").innerText = "";

    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email";

        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";

    }
    if (password.length < 6) {
        document.getElementById("passwordError").innerText =
            "Password must contain at least 6 characters";

        valid = false;
    } else {

        document.getElementById("passwordError").innerText = "";
    }
    if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError").innerText =
            "Passwords do not match";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";

    }
    if (!agreement) {
        document.getElementById("agreementError").innerText =
            "Please accept the agreement";
        valid = false;
    } else {
        document.getElementById("agreementError").innerText = "";

    }

    if (valid) {
        let user = {
            name: name,
            mobile: mobile,
            email: email,
            password: password
        };
        localStorage.setItem(
            "registeredUser",
            JSON.stringify(user)
        );
        alert("Registration successful!");
        window.location.href = "login.html";

    }
});