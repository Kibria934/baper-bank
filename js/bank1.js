document.getElementById('login-submit-button').addEventListener('click', function () {
       const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;
       
        // --password-field---
        const passwordField = document.getElementById('user-pass');
        const userPassword = passwordField.value;

        if ((userEmail == 'kibria@gmail.com') && (userPassword == 'kkkk')) {
                window.location.href = "banking.html";
        }
        else {
                alert('Please enter currect email or password')
        }
       
})