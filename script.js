
var generateBtn = document.querySelector("#generate");

// this function to generate the password with a prompt of how long should this password be 
function generatePassword() {
  var length = prompt("Choose The length for your password");
  // invalid input alert to let the user know only numbers is acceptable
  if (isNaN(length)) {
    alert("Invalid input. Please enter a number.");
  }
  
  // Validate the user's input
  if (length < 10 || length > 128) {
    alert("Password length must be a number between 10 and 128.");
    return "";
  }

  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
