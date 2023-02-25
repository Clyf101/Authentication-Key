// Select the generate button element
var generateBtn = document.querySelector("#generate");

// Function to generate the password with a prompt to get the length
function generatePassword() {
  // Prompt the user for password length
  var length = prompt("Choose the length for your password");

  // Check if the input is not a number
  if (isNaN(length)) {
    alert("Invalid input. Please enter a number.");
  }

  // Validate the user's input
  if (length < 10 || length > 128) {
    alert("Password length must be a number between 10 and 128.");
    return "";
  }

  // Define the characters that the password can include
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";

  // Generate the password by randomly selecting characters from the charset string
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

// Function to write the generated password to the #password textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add an event listener to the generate button to call the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
