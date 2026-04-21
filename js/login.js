document.addEventListener("DOMContentLoaded", function () {
  var emailInput = document.querySelector('input[type="email"]');
  var passwordInput = document.querySelector('input[type="password"]');
  var rememberCheckbox = document.querySelector('.remember input[type="checkbox"]');
  var loginBtn = document.querySelector(".signbut a");

  if (!emailInput || !passwordInput || !loginBtn) {
    return;
  }

  var savedEmail = localStorage.getItem("qp_remember_email");
  if (savedEmail && rememberCheckbox) {
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }

  function setFieldState(input, isValid) {
    input.style.border = isValid ? "1px solid #2e7d32" : "1px solid #c62828";
  }

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var emailValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
    var passwordValid = password.length >= 6;

    setFieldState(emailInput, emailValid);
    setFieldState(passwordInput, passwordValid);

    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordValid) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (rememberCheckbox && rememberCheckbox.checked) {
      localStorage.setItem("qp_remember_email", email);
    } else {
      localStorage.removeItem("qp_remember_email");
    }

    alert("Login details look good.");
  });
});
