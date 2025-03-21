// Show selected section
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

// Go back to home screen
function goHome() {
    window.location.href = "home.html";
}

// Add Item
function addItem() {
    let name = document.getElementById("add-name").value;
    let quantity = document.getElementById("add-quantity").value;
    let price = document.getElementById("add-price").value;

    if (name && quantity && price) {
        alert(`Added: ${name}, Quantity: ${quantity}, Price: ${price}`);
    } else {
        alert("Please fill all fields.");
    }
}

// Remove Item
function removeItem() {
    let name = document.getElementById("remove-name").value;
    if (name) {
        alert(`Removed: ${name}`);
    } else {
        alert("Enter item name.");
    }
}

// Update Item
function updateItem() {
    let name = document.getElementById("update-name").value;
    let quantity = document.getElementById("update-quantity").value;
    let price = document.getElementById("update-price").value;

    if (name && (quantity || price)) {
        alert(`Updated: ${name}, New Quantity: ${quantity}, New Price: ${price}`);
    } else {
        alert("Enter item name and at least one field to update.");
    }
}

// Search Item
function searchItem() {
    let name = document.getElementById("search-name").value;
    if (name) {
        document.getElementById("search-result").innerText = `Searching for: ${name}`;
    } else {
        alert("Enter item name.");
    }
}
