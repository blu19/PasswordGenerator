//declare character variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specChar = "!@#$?+";

//Alerts to inform user of password generation and lowercase inclusion
alert("Hello! Let's make a password!");

//confirm statements to determine user choice for each
var passLength = Number(prompt("How many characters do you want your password to be? (Min 8 and max 128)"));

if (passLength < 8 || passLength > 128 || isNaN(passLength)); {//Check if response is a number and within required range
    alert("Not Valid. Try again.");
    Number(prompt("How many characters do you want your password to be? (Min 8 and max 128)"));    
} //want to loop back through if statement until user input meets conditional   

//else {

alert("Lowercase letters will be automatically included.");
//}

//getting user inout to include special characters or not
var useSpec = confirm("Would you like to include special characters?");
if (useSpec !== true); {
    specChar = null;    
} 

//getting user inout to include numeric characters or not 
var useNum = confirm("Would you like to include numeric characters?");
if (useNum !== true) {
    numList = null;
}  

//getting user inout to include uppercase characters or not
var uppChar = confirm("Would you like to include uppercase characters?");
if (uppChar = true) {
    upperCase = null;  
} 

//variable to include all the selected types
var incChar = lowerCase + specChar + numList + upperCase;

//function to generate password
function generatePass(passLength) {
    for (var i = 0; i < passLength; i++) {
    passWord = passLength[Math.floor(Math.random() * passLength.length)];
}

//return the password
return passWord;

}

console.log("work");