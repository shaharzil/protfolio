'use strict';
console.log('Ex 45');

// Write a function: getLoremIpsum(wordsCount) that return a sentence with made-up words (google for: lorem ipsum...)
// TIP, here are the steps you may use to get there:
// o first write a function getWord that returns a single word with
// random letters and size 3
// Tip: you can create a string or an array of all the characters in english.
// o Now change the size to be a random number between 3-5.
// o Now call this function in a loop to create a sentence

function getLoremIpsum(wordsCount) {
    var loremipsum = '';
    for (var i = 0; i < wordsCount; i++) {
        loremipsum += ' ' + getWord()
    }
    return loremipsum
}

function getWord() {
    var randWord = '';
    var randChar = 0;
    var wordLength = parseInt(Math.random() * (6 - 3) + 3);
    for (var i = 0; i < wordLength; i++) {
        randChar = parseInt(Math.random() * (123 - 97) + 97);
        randWord += String.fromCharCode(randChar)
    }
    return randWord
}

var sentenceLength = +prompt('What is the length of the sentence you want?')
console.log(getLoremIpsum(sentenceLength))
