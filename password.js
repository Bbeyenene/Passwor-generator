function geneneratePassword() {

    //my data in string form
    const speChar = '~!@#$%^&*(){}[]\|<>/?,.';
    const numChar = '0123456789';
    const lowChar = 'abcdefghijklmnopqrstuvwxyz';
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    //prompt and confirmition questions
    var passNun = prompt('How many charaters do you want your password to be?');
    if (isNaN(passNun.valueOf()) || passNun == 0 || passNun.trim() == '') {
        // if no number value is entered cancel everything.
        alert( 'You have to enter a Number!');

    } else { 
        // if number value is entered in the prompt, collect each character to the array bellow.
        var specialcharacter = confirm('Click OK, to include special characters.');
        var numericCharacter = confirm('Click OK, to confirm including numeric characters.');
        var lowerCharacter = confirm('Click OK, to confirm including lowercase characters.');
        var uperCharacter = confirm('Click OK, to confirm including uppercase characters.');
        var charTotal = [];
        //console.log(charTotal);

        if (specialcharacter) {
            for (i=0; i < speChar.length; i++) {
                charTotal.push(speChar[i]);
            } 
        } 
        if (numericCharacter) {
            for (i=0; i < numChar.length; i++) {
            charTotal.push(numChar[i]);
            }
        }
        if (lowerCharacter) {
            for (i=0; i < lowChar.length; i++) {
                charTotal.push(lowChar[i]);
            }
        }
        if (uperCharacter) {
            for (i=0; i<upperChar.length; i++) {  
                charTotal.push(upperChar[i]);
            }
        } 

        var myNewPassword =[];
        // console.log(myNewPassword);
        for (i=0; i< passNun; i++) {
            var randPassword =  charTotal[Math.floor(Math.random()*charTotal.length)];
            myNewPassword.push(randPassword);
        }

        //finally assign the random value to the specified div with h2 content
        var h1El = document.createElement("h3");
        h1El.setAttribute('style','border-bottom: 2px solid black;');
        h1El.textContent =myNewPassword.join('');
        document.getElementById('mypassword').appendChild(h1El); 
    }
}
