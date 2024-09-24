document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const position = form.position.value.trim();
      const coverLetter = form.cover_letter.value.trim();
      
      let hasErrors = false;

      if (!name) {
        alert("Please enter your name.");
        hasErrors = true;
      }

      if (!email) {
        alert("Please enter your email.");
        hasErrors = true;
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        hasErrors = true;
      }

      if (!phone) {
        alert("Please enter your phone number.");
        hasErrors = true;
      } else if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        hasErrors = true;
      }

      if (!position) {
        alert("Please enter the position you're applying for.");
        hasErrors = true;
      }

      if (!coverLetter) {
        alert("Please provide your experience or cover letter.");
        hasErrors = true;
      }

      if (!hasErrors) {
        alert("Thank you for your application, " + name + "!");
      }
    });

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });

