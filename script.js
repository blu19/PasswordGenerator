//declare character variables
var lowerCase = array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var upperCase = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var numList = array('0','1','2','3','4','5','6','7','8','9');
var specChar = array('!','@','#','$','?','+');

//Alerts to inform user of password generation and lowercase inclusion
alert("Hello! Let's make a password!");

//confirm statements to determine user choice for each
var passLength = prompt("How many characters do you want your password to be? (Min 8 and max 128)");

//convert response to integer
int.result = Integer.parseInt(passLength);

//compare converted response to 8 and 128, if < 8 or > 128, then alert user it's not valid and must be >= 8 or <= 128 
if (passLength < 8 || passLength > 128) {
     var passLength = parseInt(prompt("Password must be min 8 characters or max 128. How many characters would you like?"));

} else (alert("Lowercase letters will be automatically included."));

function generatePass(passLength) {

var useSpec = confirm("Would you like to include special characters?");
if (useSpec == true) {
    
} else specChar = null;
 
var useNum = confirm("Would you like to include numeric characters?");
if (numChar == true) {
    
} else numList = null;

var uppChar = confirm("Would you like to include uppercase characters?");
if (uppChar == true) {
    
} else upperCase = null;

//variable to include all the selected types
var include = specChar + numChar + uppChar + lowerCase;


var pass = ""; 

//for (var i = 0; i < passLength; i++) {
//     var character = Math.floor(Math.random() * include.length);
//     pass += all.substring(character, character + 1);
//}

//return pass;

}

console.log("work");