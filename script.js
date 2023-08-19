const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simulate authentication (replace this with real authentication logic)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Simulate user registration (replace this with real user registration logic)
    alert('User registered successfully!');
});

