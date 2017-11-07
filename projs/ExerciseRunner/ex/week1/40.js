'use strict';
console.log('Ex 40');



// Write the function decrypt that gets a string and encrypt it by
// replacing each character c with c+5 (i.e. 'r' will be replaced by: 'w'), now
// write a function to decrypt a message



function encrypt(str) {
    var encryptStr = '';
    var charCode = 0;
    for (var i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i) + 5;
        if (charCode > 122) encryptStr += String.fromCharCode((charCode -= 26));
        else encryptStr += String.fromCharCode(charCode);
        
    }
    return encryptStr;
}

var encrypted = encrypt('abcstuvwxyz')
console.log(encrypted)

function decrypt(encrypted) {
    var decryptStr = '';
    var charCode = 0;
    for (var i = 0; i < encrypted.length; i++) {
        charCode = encrypted.charCodeAt(i) - 5;
        if (charCode < 79) decrypttStr += String.fromCharCode((charCode += 26));
        else decryptStr += String.fromCharCode(charCode);
    }
    return decryptStr;
}
