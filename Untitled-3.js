// popup.js
const specialCharacters = ['!', '$', '%', '&', '^', '(', ')'];

function generatePassword() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  let password = '';

  // Add one uppercase letter, one lowercase letter, one number, and one special character
  password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  // Fill the remaining characters with random characters
  const remainingLength = 8 - password.length;
  for (let i = 0; i < remainingLength; i++) {
    const randomCharType = Math.floor(Math.random() * 3); // 0, 1, or 2
    switch (randomCharType) {
      case 0:
        password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        break;
      case 1:
        password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
        break;
      case 2:
        password += numbers[Math.floor(Math.random() * numbers.length)];
        break;
    }
  }

  // Shuffle the characters for better readability
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  return password;
}

document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generateBtn');
  const passwordDisplay = document.getElementById('passwordDisplay');

  generateBtn.addEventListener('click', function () {
    const generatedPassword = generatePassword();
    passwordDisplay.textContent = generatedPassword;
  });
});
