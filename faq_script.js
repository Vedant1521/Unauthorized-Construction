// Get all the question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event to each question button
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Toggle active class to the parent faq-item
        this.parentElement.classList.toggle('active');

        // Adjust the answer panel height
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});