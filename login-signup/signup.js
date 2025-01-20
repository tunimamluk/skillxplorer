document.getElementById('signupForm').addEventListener('submit', function (event) {
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

    // Retrieve existing data from localStorage
    const registerData = JSON.parse(localStorage.getItem('register_data')) || [];

    // Add new user data
    registerData.push(userData);

    // Save back to localStorage
    localStorage.setItem('register_data', JSON.stringify(registerData));

    alert('Registration successful!');
    document.getElementById('signupForm').reset(); // Clear form inputs
});
