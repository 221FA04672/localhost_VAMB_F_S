document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('.name').value.trim();
        const email = document.querySelector('.email').value.trim();
        const number = document.querySelector('.num').value.trim();
        const members = document.querySelector('.mem').value.trim();
        const date = document.querySelector('.date').value;

        const nameRegex = /^[A-Za-z\s'-]{2,50}$/; 
        if (!name) {
            alert("Error: Name is required.");
            return;
        } else if (!nameRegex.test(name)) {
            alert("Error: Name must be 2-50 characters long and can only contain letters, spaces, hyphens, or apostrophes.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            alert("Error: Email is required.");
            return;
        } else if (!emailRegex.test(email)) {
            alert("Error: Please enter a valid email address.");
            return;
        }

        const numberRegex = /^\d{10}$/;
        if (!number) {
            alert("Error: Number is required.");
            return;
        } else if (!numberRegex.test(number)) {
            alert("Error: Number must be a valid 10-digit phone number.");
            return;
        }

        if (!members || isNaN(members) || members <= 0) {
            alert("Error: Please enter a valid number of members (greater than 0).");
            return;
        }

        const selectedDate = new Date(date);
        const today = new Date();
        if (!date) {
            alert("Error: Date is required.");
            return;
        } else if (selectedDate < today) {
            alert("Error: Please select a future date.");
            return;
        }

        const bookingId = `BID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        alert(`Booking successful!\nBooking ID: ${bookingId}\nName: ${name}\nEmail: ${email}\nNumber: ${number}\nMembers: ${members}\nDate: ${date}`);

        sendBookingId(number, bookingId);
        form.reset();
    });

    function sendBookingId(number, bookingId) {
        fetch('https://your-backend-url.com/send-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: number, message: `Your booking ID is: ${bookingId}` })
        })
        .then(response => response.json())
        .then(data => {
            console.log('SMS sent successfully:', data);
        })
        .catch(error => {
            console.error('Error sending SMS:', error);
        });
    }
});
