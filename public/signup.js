document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const notARobot = document.getElementById('notARobot').checked;
    const warnings = document.getElementById('warnings');
    
    // Clear previous warnings
    warnings.innerHTML = '';
    
    let valid = true;

    if (!/^[A-Z][a-zA-Z]*$/.test(username)) {
        warnings.innerHTML += 'Username must start with an uppercase letter.<br>';
        valid = false;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        warnings.innerHTML += 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.<br>';
        valid = false;
    }
    
    if (!notARobot) {
        warnings.innerHTML += 'You must confirm you are not a robot.<br>';
        valid = false;
    }
    
    if (valid) {
        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        document.getElementById('signupForm').classList.add('shake');
        setTimeout(() => document.getElementById('signupForm').classList.remove('shake'), 500);
    }
});

document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});
