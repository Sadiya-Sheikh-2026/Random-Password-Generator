const generateButton = document.getElementById('generate-box');
const passwordInput = document.getElementById('password');

generateButton.addEventListener('click', generateRandomPassword)

function generateRandomPassword() {
    const length = parseInt(document.getElementById("length-box").value);
    const uppercase = document.getElementById("uppercase-box").checked;
    const specialChars = document.getElementById("special-chars-box").checked;
    const numbers = document.getElementById("numbers-box").checked;

    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specialChars) chars += "!£$%^&*()-_=+@][}{;:',./<>?|`¬";
    if (numbers) chars += "1234567890";

    let password = "";
    for (let k = 0; k < length; k++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordInput.value = password
}

