document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form validation and submission logic
    const confirmationMessage = document.getElementById('confirmation');
    confirmationMessage.style.display = 'block';
    this.reset(); // Clear the form fields
});
