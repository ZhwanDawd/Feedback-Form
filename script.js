function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var feedback = document.querySelector('.feedback').value;

    if (!fullName || !phone || !email || !rating || !feedback) { 
        alert("Please fill in all fields.");
        return;
    }
    
    var feedbackObject = {
        fullName: fullName,
        phone: phone,
        email: email,
        rating: rating.value,
        feedback: feedback
    };
    
    console.log(feedbackObject);


    var successMessage = document.createElement('div');
    successMessage.textContent = 'Submission successful!';
    successMessage.classList.add('success-message');

    var formContainer = document.querySelector('.container-input');
    formContainer.insertBefore(successMessage, formContainer.firstChild);

    // Clear the form fields after submission
    document.getElementById('fullName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.querySelector('input[name="rating"]:checked').checked = false;
    document.querySelector('.feedback').value = ''; // Corrected selection
}

function resetForm() {
    // Clear the form fields
    document.getElementById('fullName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.querySelector('input[name="rating"]:checked').checked = false;
    document.querySelector('.feedback').value = ''; // Corrected selection

    // Remove any existing success message
    var successMessage = document.querySelector('.success-message');
    if (successMessage) {
        successMessage.remove();
    }
}
