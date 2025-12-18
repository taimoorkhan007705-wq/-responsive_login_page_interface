const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById('password-field');
const passwordConfirm = document.getElementById('confirm-password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const passwordValue = passwordInput.value;
    const confirmValue = passwordConfirm.value; 
    const hasNumber = /\d/.test(passwordValue);


    if (passwordValue.length < 8 || !hasNumber) {
        alert("Password is waek ");
    } 
 
    else if (passwordValue !== confirmValue) {
        alert("Passwords is not  matching ");
    } 
 
    else {
        alert("Successful! Password is matched ");
   
    }
});