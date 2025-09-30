const PROTECTED_PASSWORD = "in the land of the blind";
const ADMIN_PASSWORD = "3912";

// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("okte9RzHFeBGvliSJ");
});

// On protected entry form submit
function checkAccess(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email || !password) {
        alert('Please fill in name, email, and password.');
        return false;
    }

    if (password !== PROTECTED_PASSWORD) {
        alert('Incorrect password. Access denied.');
        return false;
    }

    const entry_date = new Date().toISOString().split('T')[0];

    // Send email with EmailJS
    emailjs.send("service_mejqocb", "qllgcgb", {
        name: name,
        email: email,
        entry_date: entry_date
    }).then(function(response) {
        alert('Access granted! Email logged.');
    }, function(error) {
        alert('Access granted! (Email error: ' + error.text + ')');
    });

    // Redirect after submit
    setTimeout(() => {
        window.location.href = 'protected.html';
    }, 1000);
    return true;
}

// For admin page
function adminCheck() {
    const pass = prompt('Enter admin code:');
    if (pass === ADMIN_PASSWORD) {
        alert('Admin access granted. Edit script.js to change passwords. View emails in your inbox.');
    } else {
        alert('Wrong code.');
    }
}
