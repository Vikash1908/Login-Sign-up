# LOGIN/SIGN-UP PAGE
This project demonstrates how to create a login and sign-up page. We'll have to view the data that we have created in the another project after logging in.

## Description
This repository contains code for login and sign-up page. It also contains login and sign-up validation code. We'll be using Node js to code and express as itts framework. We'll also be providing a way to connect to other project.

## Getting Started

### Prerequisites
1. Node.js and npm installed
2. Express installed

#### Installing
1. Install dependencies:
   - npm init -y
2. Install express
   - npm install express

## Javascript File
The javascript file "server.js" contains all the logic, routes, middleware. Here we'll define express and star the server.
<div>
   const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve the sign-up page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
</div>

### HTML file for Sign-up
<div>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Sign Up</h2>
        <form id="signupForm">
            <label for="username">Username:</label>
            <input type="text" placeholder="Enter your Username here" id="username" required>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter the Password" id="password" required>
            <input type="checkbox" id="showPassword"> Show Password
            <br><br>
            <input type="checkbox" id="notARobot" required> I am not a robot
            <br>
            <button type="submit">Sign Up</button>
        </form>
        <div id="warnings"></div>
    </div>
    <script src="signup.js"></script>
</body>
</html>
</div>

#### js file for Sign-up validation
<div>
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
</div>

### HTML file for Login
<div>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="loginUsername">Username:</label>
            <input type="text" placeholder="Enter your Username here" id="loginUsername" required>
            <label for="loginPassword">Password:</label>
            <input type="password" placeholder="Enter your Password" id="loginPassword" required>
            <input type="checkbox" id="showLoginPassword"> Show Password
            <br>
            <button type="submit">Login</button>
        </form>
        <div id="loginWarnings"></div>
    </div>
    <script src="login.js"></script>
</body>
</html>
</div>

#### js file for Login Page validation
<div>
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
</div>

### CSS file for styling
<div>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    width: 80%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.checkbox-container input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

#warnings, #loginWarnings {
    color: red;
    font-size: 14px;
}

.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}
</div>

Note- To View the data of the another project we'll ahve to run another server with different port value(eg- 4000) in another teminal.

#### Command to run thte code
   - node server.js

## Authors

Vikash Kumar Singh

## License

This project is licensed under Vikash Kumar Singh.