document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const nameInput = document.querySelector('.name');
    const numInput = document.querySelector('.num');

    submitBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const name = nameInput.value.trim();
        const num = numInput.value.trim();

        let errorMessage = '';

        if (!validatename(name)) {
            errorMessage += 'Please enter a valid name (letters only).\n';
        }

        if (!validateEmail(email)) {
            errorMessage += 'Please enter a valid email address.\n';
        }

        if (!validateNum(num)) {
            errorMessage += 'Please enter a valid 10-digit phone number.\n';
        }

        if (password.length !== 10) {
            errorMessage += 'Password must be exactly 10 characters long.\n';
        }

        if (errorMessage === '') {
            alert('Successfully registered! Redirecting to login page...');
            window.location.href = './login.html';
        } else {
            alert(errorMessage);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatename(name) {
        const re = /^[A-Za-z]+$/;
        return re.test(name);
    }

    function validateNum(num) {
        const re = /^[0-9]{10}$/;
        return re.test(num);
    }
});
