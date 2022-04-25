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
  var wantNum = window.confirm("Would you like to include numbers. Select OK for yes or cancel for no");
  //    Include special characters
  var wantSpec = window.confirm("Do you wish to include special characters. Select OK for yes or cancel for no");

  while (wantLow == false && wantUpp == false && wantNum == false && wantSpec == false) {
    windowow.alert("Please select yes for AT LEAST 1 prompt");
    wantLow = window.confirm("Would you like to include lowercase letters. Select OK for yes or cancel for no");
    //     c uppercase
    wantUpp = window.confirm("Would you like to include uppercase letters. Select OK for yes or cancel for no");
    //    d numbers 
    wantNum = window.confirm("Would you like to include numbers. Select OK for yes or cancel for no");
    //    Include special characters
    wantSpec = window.confirm("Do you wish to include special characters. Select OK for yes or cancel for no");
  }

  return generatePassword(passLength, wantLow, wantUpp, wantNum, wantSpec);
}

function generatePassword(a, b, c, d, e) {
  // Debug code to verify selection of criteria from detPasscrit function
  // console.log(a, b, c, d, e);
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = ['!', '@', '#', '$', '%', '&', '*', '?']
  //creates an array 26 units length starting from number 97 in javascript character codes to represent codes fo lowercase letters
  var characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
  var lowerLetts = characterCodes.map(code => String.fromCharCode(code));
  // in the same style as we did the lowercase letters we did the same for the string of uppercase letters starting from number 65 in character codes for javascript
  var charCodestwo = Array.from(Array(26)).map((_, i) => i + 65);
  var upperLetts = charCodestwo.map(code => String.fromCharCode(code));
  //creates an empty array to store our full array of possible characters from which to generate our password
  var permChar = [];
  // if statements tell our function to add the appropriate characters into our empty array only if they were selected to be part of password criteria from detPasscrit function
  if (b == true) {
    permChar = permChar.concat(lowerLetts);
  }
  if (c == true) {
    permChar = permChar.concat(upperLetts);
  }
  if (d == true) {
    permChar = permChar.concat(numbers);
  }
  if (e == true) {
    permChar = permChar.concat(specialChar);
  }
  //debug code to verify that the permChar string is created according to designated criteria to contain all possible characters 
  // console.log(permChar);
  var finLength = "";
  for (let i = 0; i < a; i++) {

    // Math .floor is saying that you're gonna pick a number equal to the place of a character in the permChar string 
    finLength += permChar[Math.floor(Math.random() * permChar.length)];
  }
  //Debug code to make sure that our desires password was generated
  // console.log(finLength);

  //4 Display password to the page

  return finLength;


}

// generatePasswordText.value = passVal;
// console.log(passVal);

// Write password to the #password input
function writePassword() {
  var password = detPasscrit();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



