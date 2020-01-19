function init() {

    //Alerts to inform user of password generation and lowercase inclusion
    alert("Hello! Let's make a password!");

    //confirm statements to determine user choice for each
    var passLength = Number(
    prompt(
        "How many characters do you want your password to be? (Min 8 and max 128)"
    )
    );

    //if statement to make sure user passwrodlength meets conditionals
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {

    //Check if response is a number and within required range
    alert("Not Valid. Try again.");
    Number(
        prompt(
        "How many characters do you want your password to be? (Min 8 and max 128)"
        )
    );
    } //want to loop back through if statement until user input meets conditional

    //alert to notify user password will automatically include lowercase characters
    alert("Lowercase letters will be automatically included.");

    //getting user input to include special characters or not
    var useSpec = confirm(
    "Would you like to include special characters?"
    );

    //getting user input to include numeric characters or not
    var useNum = confirm(
    "Would you like to include numeric characters?"
    );

    //getting user input to include uppercase characters or not
    var uppChar = confirm(
    "Would you like to include uppercase characters?"
    );

    //function to generate password
    function generatePass(passLength, useSpec, useNum, uppChar) {

    //assign character variables
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numList = "0123456789";
    var specChar = "!@#$?+";
    var passWord = "";

    //variable to include all the selected types
    var incChar =
        lowerCase +
        (useSpec ? specChar : null) +
        (useNum ? numList : null) +
        (uppChar ? upperCase : null);

    console.log(incChar);

    for (var i = 0; i < passLength; i++) {
        passWord += incChar.charAt(
        Math.floor(Math.random() * incChar.length)
        );
        console.log(passWord);
    }
    return alert("You're password is: " + passWord);

    }
    //invoke function
    var pw = generatePass(passLength, useSpec, useNum, uppChar);
    

}

init();