// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function detPasscrit() {
  // Prompt user for password criteria 
  //    a  password length
  var passLength = window.prompt("Your password can be between 8-128 characters. Please indicate desired length below.");
  while (passLength < 8 || passLength > 128) {
    window.alert("Your password must be between 8 and 128 characters. Try again.");
    passLength = window.prompt("Your password can be between 8-128 characters. Please indicate desired length below.");
  }
  //    b lowercase
  var wantLow = window.confirm("Would you like to include lowercase letters. Select OK for yes or cancel for no");

  //     c uppercase
  var wantUpp = window.confirm("Would you like to include uppercase letters. Select OK for yes or cancel for no");

  //    d numbers 
  var wantNum = window.confirm("Would you like to include nubmers. Select OK for yes or cancel for no");

  //    Include special characters
  var wantSpec = window.confirm("Do you wish to include special characters. Select OK for yes or cancel for no");
generatePassword(passLength,wantLow,wantNum,wantSpec,wantUpp);

return null;

}

function generatePassword(a,b,c,d,e) {
  console.log(a,b,c,d,e);
  //2 Validate the User input is correct 

  //3 Generate password according to selection 

  //4 Display password to the page
  return "Generated password";

}

// generatePasswordText.value = passVal;
// console.log(passVal);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


detPasscrit();