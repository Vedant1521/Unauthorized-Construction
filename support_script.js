function displayContactForm(supportType) {
    document.getElementById('support-type').value = supportType;
    document.getElementById('contact-form-section').classList.remove('hidden');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
    document.getElementById('contact-form').reset();
    document.getElementById('contact-form-section').classList.add('hidden');
});
