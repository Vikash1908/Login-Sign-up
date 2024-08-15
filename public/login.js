document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const loginWarnings = document.getElementById('loginWarnings');
    
    // Clear previous warnings
    loginWarnings.innerHTML = '';
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'welcome.html'; // Redirect to welcome page
    } else {
        loginWarnings.innerHTML += 'Wrong username or password.<br>';
        document.getElementById('loginForm').classList.add('shake');
        setTimeout(() => document.getElementById('loginForm').classList.remove('shake'), 500);
    }
});

document.getElementById('showLoginPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('loginPassword');
    passwordField.type = this.checked ? 'text' : 'password';
});
