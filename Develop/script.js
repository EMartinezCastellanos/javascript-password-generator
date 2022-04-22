// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  // Prompt user for password criteria 
  
  //    a  password length

  //    b lowercase

  //     c uppercase

  //    d numbers 

  //    e special characters

  //2 Validate the User input is correct 

  //3 Generate password according to selection 

  //4 Display password to the page
  return "Generated password";

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
