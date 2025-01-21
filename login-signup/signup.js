document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form submission reload
  
    // Get form data
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;
  
    // Validate input
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Prepare data object
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
  
    // Send data to the server
    const response = await fetch('/save-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
  
    const result = await response.json();
    alert(result.message);
    document.getElementById('signupForm').reset(); // Clear form inputs
  });
  