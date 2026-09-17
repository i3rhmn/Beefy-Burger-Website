document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user input
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Save user data to LocalStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('email', email);
  
    // Show success message
    document.getElementById('formMessage').innerText = 'Registration successful!';
    alert('Thank you for registering!');
  
    // Redirect to Home page
    window.location.href = 'home.html';
    
  });
  
