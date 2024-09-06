document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the standard behavior of the form

    // Getting field values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple Field validation
    if (!email || !password) {
        errorMessage.textContent = 'Please enter both email and password.';
        return;
    }

    // Mock sending data to the server
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => {
        // Mock success
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true }), 500); // 0.5 seconds delay
        });
    })
    .then(data => {
        if (data.success) {
            alert('Authentication successful!');
        } else {
            errorMessage.textContent = 'Invalid email or password.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
    });
});
