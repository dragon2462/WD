const validUsername = "Admin";
const validPassword = "AdministratorAccessCode";

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "private2.html";
    } 
    else if (enteredUsername !== validUsername && enteredPassword !== validPassword){
        console.log("Invalid credentials. Please try again.");
    }
    else {
        alert("Invalid username or password. Please try again.");
    }
}

// Check login status on page load
window.addEventListener("load", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        // User is not logged in, redirect to login page
        //window.location.href = "private.html";
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});

// Set the timeout duration in milliseconds (60 seconds)
const timeoutDuration = 60000;

// Start the timer when the page loads
const timeout = setTimeout(redirect, timeoutDuration);

// Listen for any user interaction (click, keypress, etc.)
document.addEventListener("click", resetTimer);
document.addEventListener("keypress", resetTimer);

function resetTimer() {
    // If there's user interaction, clear the timeout and restart it
    clearTimeout(timeout);
    timeout = setTimeout(redirect, timeoutDuration);
}

function redirect() {
    // Redirect to private.html when the timer expires
    window.location.href = "private.html";
}
