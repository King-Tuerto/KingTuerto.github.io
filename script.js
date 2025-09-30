 // Protected password (change by editing this file in GitHub)
const PROTECTED_PASSWORD = "in the land of the blind";
const ADMIN_PASSWORD = "3912";

// On protected entry form submit
function checkAccess(event) {
    event.preventDefault(); // Stop default form submit to avoid 405 error
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

    // Add hidden date field
    const form = document.querySelector('form');
    const dateInput = document.createElement('input');
    dateInput.type = 'hidden';
    dateInput.name = 'entry_date';
    dateInput.value = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    form.appendChild(dateInput);

    // Send email with EmailJS
    emailjs.init("okte9RzHFeBGvliSJ"); // Your Public Key
    emailjs.send("service_mejqocb", "template_ar0b48", {
        name: name,
        email: email,
        entry_date: dateInput.value
    }).then(function(response) {
        console.log('Email sent!', response.status, response.text);
    }, function(error) {
        console.log('Email error:', error);
    });

    // Redirect after submit
    setTimeout(() => {
        window.location.href = 'protected.html';
    }, 1000);
    return true;
}

// For admin page (placeholder—use for notes)
function adminCheck() {
    const pass = prompt('Enter admin code:');
    if (pass === ADMIN_PASSWORD) {
        alert('Admin access granted. Edit script.js to change passwords. View emails in your inbox.');
    } else {
        alert('Wrong code.');
    }
}
