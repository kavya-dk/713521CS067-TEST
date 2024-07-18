
function validateBookingForm() {
    let origin = document.getElementById('origin').value.trim();
    let destination = document.getElementById('destination').value.trim();
    let departureDate = document.getElementById('departureDate').value.trim();
    let returnDate = document.getElementById('returnDate').value.trim();
    let busType = document.getElementById('busType').value;

    if (origin === '') {
        alert('Please enter origin.');
        return false;
    }

    if (destination === '') {
        alert('Please enter destination.');
        return false;
    }

    if (departureDate === '') {
        alert('Please select departure date.');
        return false;
    }
    return true;
}

function userLogin() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
        
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function adminLogin() {
    let adminEmail = document.getElementById('adminEmail').value.trim();
    let adminPassword = document.getElementById('adminPassword').value.trim();

    
    if (adminEmail === 'admin@example.com' && adminPassword === 'adminpassword') {
        alert('Admin login successful!');
        
    } else {
        alert('Invalid admin email or password. Please try again.');
    }
}

