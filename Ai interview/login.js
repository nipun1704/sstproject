function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically make an API call to your backend
    const validEmail = localStorage.getItem('userEmail');
    const validPassword = localStorage.getItem('userPassword');

    if (email === validEmail && password === validPassword) {
        // Set current user in localStorage
        localStorage.setItem('currentUser', email);
        // Redirect to homepage
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid email or password');
    }
}

// For testing purposes - set some valid credentials
localStorage.setItem('userEmail', 'test@example.com');
localStorage.setItem('userPassword', 'password123'); 