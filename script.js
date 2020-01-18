//declare character variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specChar = "!@#$?+";
var passWord = "";
//Alerts to inform user of password generation and lowercase inclusion
alert("Hello! Let's make a password!");

//confirm statements to determine user choice for each
var passLength = Number(prompt("How many characters do you want your password to be? (Min 8 and max 128)"));

//function ; {
//passLength = getPasswordLength()
    if ((passLength < 8) || (passLength > 128) || (isNaN(passLength))) {//Check if response is a number and within required range
        alert("Not Valid. Try again.");
        Number(prompt("How many characters do you want your password to be? (Min 8 and max 128)"));    

    } //want to loop back through if statement until user input meets conditional   
//}  return passLength;

//else {

alert("Lowercase letters will be automatically included.");
//}

//getting user input to include special characters or not
var useSpec = confirm("Would you like to include special characters?");
if (!useSpec) {
    specChar = null;    
} 

//getting user input to include numeric characters or not 
var useNum = confirm("Would you like to include numeric characters?");
if (!useNum) {
    numList = null;
}  

//getting user input to include uppercase characters or not
var uppChar = confirm("Would you like to include uppercase characters?");
if (!uppChar) {
    upperCase = null;  
} 

//variable to include all the selected types
var incChar = lowerCase + specChar + numList + upperCase;

console.log(incChar);
//function to generate password
function generatePass(passLength) {
    for (var i = 0; i < passLength; i++) {
        console.log(Math.ceil(Math.random() * passLength))

    // passWord = Math.floor(Math.random() * passLength.length);
        //+=
        //stringArray
        // step 1 - generate random number to represent index in "inChar" string
        // step 2 - add the character at that index to the end of the passWord string
    }
    
    //return the password
    return passWord;
}

//invoke function

alert(generatePass(passLength));

console.log("work");