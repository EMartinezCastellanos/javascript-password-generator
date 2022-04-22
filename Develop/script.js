// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // Prompt user for password criteria 
  window.alert("Press ok to continue to password selection criteria");
  //    a  password length
  var passLength = window.prompt("Your password can be between 8-128 characters. Please indicate desired length below.");
  if (passLength < 8) {
    window.alert("Your password must be at least 8 characters long")
  }
  else if (passLength > 128) {
    window.alert("Your password cannot exceed 128 characters");
  }
  else {
    console.log(passLength);
  }
  //    b lowercase
  var wantLow = window.confirm("Would you like to include lowercase letters. Select OK for yes or cancel for no");
  if (wantLow){
    console.log("This person wants lowercase");
  }
  else{
    console.log("This person does not want lowercase letters");
  }
  //     c uppercase
  var wantUpp = window.confirm("Would you like to include uppercase letters. Select OK for yes or cancel for no");
  if (wantUpp){
    console.log("This person wants uppercase");
  }
  else{
    console.log("User does not want to include uppercase");
  }
  //    d numbers 
  var wantNum = window.confirm("Would you like to include nubmers. Select OK for yes or cancel for no");
  if (wantNum){
    console.log("This person wants numbers");
  }
  else{
    console.log("user wishes to ommit uppercase letters");
  }
  //    Include special characters
  var wantSpec = window.confirm("Do you wish to include special characters. Select OK for yes or cancel for no");
  if (wantSpec){
    console.log("They wish for special characters");
  }
  else{
    console.log("They do not wish for special characters");
  }

  console.log(wantLow, wantNum, wantSpec, wantUpp, passLength);

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
