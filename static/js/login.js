
        function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem("isLoggedIn", "true");  // Store login state
        window.location.href = "home.html";  // Redirect to home screen
    } else {
        document.getElementById('error-message').innerText = 'Invalid credentials';
    }
}

function logout() {
    document.getElementById('home-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
}
