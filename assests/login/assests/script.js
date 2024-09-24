document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');

    submitBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateEmail(email) && password.length > 0) {
            // Example action: logging to console
            console.log('Email:', email);
            console.log('Password:', password);

            // Redirect to home page
            window.location.href = '../../index.html'; // Change this to your home page URL
        } else {
            alert('Please enter a valid email and password.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
