document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');

    submitBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateEmail(email) && password.length > 0) {
            console.log('Email:', email);
            console.log('Password:', password);


            window.location.href = '../../home/home.html'; 
        } else {
            alert('Please enter a valid email and password.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@gmail\.com$/;
        return re.test(email);
    }
});
