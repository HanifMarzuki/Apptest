(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_xxxx'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('statusMessage').textContent = "Your quote request has been sent!";
            document.getElementById('quoteForm').reset();
        }, (err) => {
            document.getElementById('statusMessage').textContent = "Failed to send quote request. Please try again.";
        });
});

