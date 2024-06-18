document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const terms = document.getElementById('terms').checked;

    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    const data = {
        name,
        email,
        password,
        terms
    };

    fetch('https://your-database-endpoint.com/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Registration successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed!');
    });
});
