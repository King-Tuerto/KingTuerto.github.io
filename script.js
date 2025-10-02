const PROTECTED_PASSWORD = "in the land of the blind";
const ADMIN_PASSWORD = "3912";

// On protected entry form submit
function checkAccess(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    if (!password) {
        alert('Please enter the passphrase.');
        return false;
    }

    if (password !== PROTECTED_PASSWORD) {
        alert('Incorrect passphrase. Access denied.');
        return false;
    }

    // Redirect to protected page
    setTimeout(() => {
        window.location.href = 'protected.html';
    }, 1000);
    return true;
}

// For admin page (if you add it later)
function adminCheck() {
    const pass = prompt('Enter admin code:');
    if (pass === ADMIN_PASSWORD) {
        alert('Admin access granted. Edit script.js to change passwords.');
    } else {
        alert('Wrong code.');
    }
}
