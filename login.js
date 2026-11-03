let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let email =
        document.getElementById("email").value.trim();
    let password =
        document.getElementById("password").value;
    let emailError =
        document.getElementById("emailError");
    let passwordError =
        document.getElementById("passwordError");
    emailError.innerText = "";
    passwordError.innerText = "";
    if (email === "") {
        emailError.innerText =
            "Email is required";
        return;

    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.innerText =
            "Enter a valid email";
        return;

    }
    if (password === "") {
        passwordError.innerText =
            "Password is required";
        return;

    }
    let storedUser =
        localStorage.getItem("registeredUser");
    if (storedUser === null) {
        emailError.innerText =
            "No account found. Please register first.";
        return;

    }
    let user =
        JSON.parse(storedUser);
    if (email !== user.email) {
        emailError.innerText =
            "Email does not match";
        return;

    }
    if (password !== user.password) {
        passwordError.innerText =
            "Incorrect password";
        return;

    }
    alert("Login successful!");

    window.location.href = "CaseStudy.html";

});
function forgotPassword(event) {
    event.preventDefault();
    alert(
        "Password reset feature is not available in this demo."
    );

}