// Toggle Sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");

    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    } else {
        sidebar.classList.add("show");
    }
}

// Toggle Profile Menu
function toggleProfileMenu() {
    document.getElementById("profile-menu").classList.toggle("show");
}

// Navigate to Inventory Management (Flask-Compatible)
function goToInventory() {
    window.location.href = "/inventory";
}

// Logout (Flask-Compatible)
function logout() {
    fetch("/logout", { method: "POST" })  // Calls Flask route for logout
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "/"; // Redirect to login/homepage
            }
        })
        .catch(error => console.error("Logout error:", error));
}

// Manage Profile (Placeholder Function)
function manageProfile() {
    alert("Profile management coming soon!");
}
