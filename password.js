function geneneratePassword() {
    //my data in string form
    const speChar = '~!@#$%^&*(){}[]\|<>/?,.';
    const numChar = '0123456789';
    const lowChar = 'abcdefghijklmnopqrstuvwxyz';
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /*---------------------------------------------------------------------------*/ 
    var passNun = prompt('How many charaters do you want your password to be?');
    // console.log(passNeeded);
    /*---------------------------------------------------------------------------*/ 
    if (isNaN(passNun.valueOf()) || passNun == 0 || passNun.trim() == '') {
        //cancel everything if no number is entered.
        alert( 'You have to enter a Number!');
    } else { 
        /*---------------------------------------------------------------------------*/ 
        // if number is entered in the prompt collect random numbers of its length from each character to the array bellow.
        var charTotal = [];
        // console.log(charTotal);
        /*---------------------------------------------------------------------------*/ 
        var specialcharacter = confirm('Click OK, to include special characters.');
        var randSpeChar;
        if (specialcharacter) {
            // collect the charaters to the charTotal arrey characters
            for (i=0; i < speChar.length; i++) {
                var randSpeChar = speChar[Math.floor(Math.random()*speChar.length)];
                // console.log(randSpeChar);
                charTotal.push(randSpeChar);
            } 
        } else {
            // Do Nothing, go to the next step.
        }
        /*---------------------------------------------------------------------------*/ 
        var numericCharacter = confirm('Click OK, to confirm including numeric characters.');
        var randNumChar;
        if (numericCharacter) {
            // collect the charaters to the charTotal arrey characters
            for (i=0; i < numChar.length; i++) {
            var randNumChar = numChar[Math.floor(Math.random()*numChar.length)];
            // console.log(randNumChar);
            charTotal.push(randNumChar);
            }
        } else {
            //Do nothing go to the next step
        }
        /*---------------------------------------------------------------------------*/ 
        var lowerCharacter = confirm('Click OK, to confirm including lowercase characters.');
        var randLowChar;
        if (lowerCharacter) {
            // collect the charaters to the charTotal arrey characters
            for (i=0; i < lowChar.length; i++) {
                var randLowChar = lowChar[Math.floor(Math.random()*lowChar.length)];
                // console.log(randLowChar);
                charTotal.push(randLowChar);
            }
        } else {
            //do nothing go to the next step
        }
        /*---------------------------------------------------------------------------*/ 
        var uperCharacter = confirm('Click OK, to confirm including uppercase characters.');
        var randUpperChar;
        if (uperCharacter) {
            // collect the charaters to the charTotal arrey characters
            for (i=0; i<upperChar.length; i++) {
                var randUpperChar = upperChar[Math.floor(Math.random()*upperChar.length)];
                // console.log(randUpperChar);
                charTotal.push(randUpperChar);
            }
        }else {
            //do nothing go got the final step
        }
        /*---------------------------------------------------------------------------*/ 
        var myNewPassword =[];
        // console.log(myNewPassword);
        for (i=0; i< passNun; i++) {
            var rrandPassword =  charTotal[Math.floor(Math.random()*charTotal.length)];
            myNewPassword.push(rrandPassword);
            // console.log(rrandPassword);
        }
        var h1El = document.createElement("h2");
        h1El.textContent = myNewPassword.join('');
        document.getElementById('mypassword').appendChild(h1El);  
    }
    var alpha = "ABCDE";
        var com = alpha.split(',');
        console.log(com);
		// var ar = com.split(','); // split string on comma space
		// console.log( ar );
}

