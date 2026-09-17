document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Trigger validation when the form is submitted
  validateForm();
});

function validateForm() {
  // Get form inputs
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const mobileInput = document.getElementById('mobile');
  const emailInput = document.getElementById('email');

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const email = emailInput.value.trim();

  // Validation flags
  let valid = true;
  let errorMessage = '';

  // Reset input styles
  firstNameInput.classList.remove('error', 'valid');
  lastNameInput.classList.remove('error', 'valid');
  mobileInput.classList.remove('error', 'valid');
  emailInput.classList.remove('error', 'valid');

  // Validation checks
  if (firstName.length < 3) {
    errorMessage += 'First Name must be at least 3 characters long.\n';
    firstNameInput.classList.add('error');
    valid = false;
  } else {
    firstNameInput.classList.add('valid');
  }
  
  if (lastName.length < 3) {
    errorMessage += 'Last Name must be at least 3 characters long.\n';
    lastNameInput.classList.add('error');
    valid = false;
  } else {
    lastNameInput.classList.add('valid');
  }
  
  if (!/^\d{8}$/.test(mobile)) {
    errorMessage += 'Mobile No must be exactly 8 digits.\n';
    mobileInput.classList.add('error');
    valid = false;
  } else {
    mobileInput.classList.add('valid');
  }
  
  if (!/\S+@\S+\.\S+/.test(email)) {
    errorMessage += 'Please enter a valid email address.\n';
    emailInput.classList.add('error');
    valid = false;
  } else {
    emailInput.classList.add('valid');
  }

  // If the form is valid, submit it, otherwise show an alert
  if (valid) {
    alert('Form submitted successfully!');
    document.getElementById('registrationForm').reset();
    removeValidationStyles();
  } else {
    alert(errorMessage);
  }
}

function removeValidationStyles() {
  const inputs = document.querySelectorAll('#registrationForm input');
  inputs.forEach(input => {
    input.classList.remove('error', 'valid');
  });
}

// Real-time validation event listeners
document.querySelectorAll('#registrationForm input').forEach(input => {
  input.addEventListener('input', function () {
    validateField(input);
  });
});

function validateField(input) {
  let valid = true;

  // Reset input styles
  input.classList.remove('error', 'valid');

  if (input.id === 'firstName' || input.id === 'lastName') {
    if (input.value.trim().length < 3) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.add('valid');
    }
  } else if (input.id === 'mobile') {
    if (!/^\d{8}$/.test(input.value.trim())) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.add('valid');
    }
  } else if (input.id === 'email') {
    if (!/\S+@\S+\.\S+/.test(input.value.trim())) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.add('valid');
    }
  }
}








// Fetch the user's name from LocalStorage
const userName = localStorage.getItem('firstName');

// Check if the name exists, then display it
if (userName) {
  const userNameDisplay = document.getElementById('userNameDisplay');
  userNameDisplay.textContent = `Welcome, ${userName}!`;
}


