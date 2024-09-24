document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');

    fetch('https://api.example.com/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: amount,
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseMessage.textContent = 'Thank you for your donation!';
            responseMessage.style.color = 'green';
        } else {
            responseMessage.textContent = 'There was an error processing your donation.';
            responseMessage.style.color = 'red';
        }
    })
    .catch(error => {
        responseMessage.textContent = 'There was an error processing your donation.';
        responseMessage.style.color = 'red';
    });
});