const PROTECTED_PASSWORD = "in the land of the blind";
const ADMIN_PASSWORD = "3912";

// On protected entry form submit
function checkAccess(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    if (!password) {
        alert('Please enter the password.');
        return false;
    }

    if (password !== PROTECTED_PASSWORD) {
        alert('Incorrect password. Access denied.');
        return false;
    }

    // Hide password form and show Google Form
    document.getElementById('password-form').style.display = 'none';
    document.getElementById('google-form').style.display = 'block';

    return false; // Don't redirect—let them fill the form
}

// For admin page
function adminCheck() {
    const pass = prompt('Enter admin code:');
    if (pass === ADMIN_PASSWORD) {
        alert('Admin access granted. Edit script.js to change passwords. View registrations in your Google Form responses (paul@tv-mexico.com).');
    } else {
        alert('Wrong code.');
    }
}
