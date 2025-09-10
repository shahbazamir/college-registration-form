
// script.js
function validateForm() {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value.trim();
  const successMsg = document.getElementById("successMsg");

  // Simple validations
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return false;
  }

  if (!gender) {
    alert("Please select a gender.");
    return false;
  }

  if (course === "") {
    alert("Please select a course.");
    return false;
  }

  // If everything is valid
  successMsg.textContent = "Registration successful!";
  return false; // prevent actual form submission for demo
}
