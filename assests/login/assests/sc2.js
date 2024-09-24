document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const nameInput = document.querySelector('.name'); // Add name input

    submitBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const name = nameInput.value.trim(); // Get name value

        if (validateName(name) && validateEmail(email) && password.length > 0) {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);

            alert('Successfully registered! Redirecting to login page...');
            window.location.href = './login.html'; 
        } else {
            alert('Please enter a valid name, email, and password.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateName(name) {
        return name.length > 0 && /^[a-zA-Z\s]+$/.test(name);
    }
});