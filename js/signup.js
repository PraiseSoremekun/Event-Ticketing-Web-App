document.addEventListener("DOMContentLoaded", function () {
  var emailInput = document.querySelector('input[type="email"]');
  var passwordInputs = document.querySelectorAll('input[type="password"]');
  var signUpBtn = document.querySelector(".signbut a");

  if (!emailInput || passwordInputs.length < 2 || !signUpBtn) {
    return;
  }

  var passwordInput = passwordInputs[0];
  var confirmPasswordInput = passwordInputs[1];

  function setFieldState(input, isValid) {
    input.style.border = isValid ? "1px solid #2e7d32" : "1px solid #c62828";
  }

  signUpBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    var emailValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
    var passwordValid = password.length >= 6;
    var confirmValid = password === confirmPassword && confirmPassword.length > 0;

    setFieldState(emailInput, emailValid);
    setFieldState(passwordInput, passwordValid);
    setFieldState(confirmPasswordInput, confirmValid);

    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordValid) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (!confirmValid) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup details look good.");
  });
});
