// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // prompt
  var name = prompt("What is your name?");

  //confirm
  var areThePack = confirm("Are the packers awesome?")

  return ""


}

// Write password to the #password input  DO NOT TOUCH 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
