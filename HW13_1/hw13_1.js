document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.length < 5) {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters long.';
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number must start with +380 and be followed by 9 digits.';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Invalid email address.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // If form is valid, log the data to console
    if (isValid) {
        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Phone:', phone);
        console.log('Email:', email);
    }
});