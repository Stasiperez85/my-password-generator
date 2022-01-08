// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log

// var passLenMin = 8;

// var passLenMax = 128;

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var generatePassword = function () {

  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"))
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Password must contain at least 8-128 characters. How many characters would you like your password to be?");
  }

  var lowercaseOption = window.confirm("Would you like to use lowercase letters?")
  var uppercaseOption = window.confirm("Would you like to use UPPERCASE letters?")
  var numberOption = window.confirm("Would you like to use numbers?")
  var specialCharOption = confirm("Would you like to use special characters?")

  if (!(lowercaseOption || uppercaseOption || numberOption || specialCharOption)) {
    alert("You must have aleast one character type!");
    generatePassword()
  }
  var text = ""
  for (var i = 0; i < passwordLength; i++) {
    if (lowercaseOption) {
      text += getRandomIndex(lowerCaseArray);
      i++
    }

    if (specialCharOption) {
      text += getRandomIndex(specialCharArray);
      i++
    }

    if (uppercaseOption) {
      text += getRandomIndex(upperCaseArray);
      i++
    }

    if (numberOption) {
      text += getRandomIndex(numberArray);
      i++
    }

  }
  return text
}

function getRandomIndex(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var element = arr[index];
  return element
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
