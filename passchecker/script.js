function passwordstrength() {
  var pwd = document.getElementById("pass").value;
  var strength = 0;

  if (pwd.length > 7) strength++;
  if (/\d/.test(pwd)) strength++;
  if (/[a-z]/.test(pwd)) strength++;
  if (/[!@#$%^&*()_+\-=\[\]{}|\\:;<>?/]/.test(pwd)) strength += 2;
  if (/[A-Z]/.test(pwd)) strength++;

  var messageElement = document.getElementById("strength");
  if (strength === 0)
    messageElement.innerHTML = "";
  else if (strength < 3) {
    messageElement.innerHTML = "Weak Password";
    messageElement.className = "weak";
    document.querySelector('hr').className = 'w';
  } else if (strength < 5) {
    messageElement.innerHTML = "Medium Password";
    messageElement.className = "mid";
    document.querySelector('hr').className = 'm';

  } else {
    messageElement.innerHTML = "Strong Password";
    messageElement.className = "strong";
    document.querySelector('hr').className = 's';

  }
}

setInterval(passwordstrength, 100);

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("pass");
  var toggleButton = document.querySelector(".toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.classList.add("show");
  } else {
    passwordInput.type = "password";
    toggleButton.classList.remove("show");
  }
}