// Simple hardcoded authentication credentials for demonstration
const registeredUsers = {
    username: 'user123',
    password: 'password123'
};

// Event listener for the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Authentication check
    if (username === registeredUsers.username && password === registeredUsers.password) {
        alert('Login Successful!');
        window.location.href = "secured-page.html"; // Redirect to secured page
    } else {
        alert('Invalid username or password.');
    }
});