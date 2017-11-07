'use strict';
console.log('Ex 50')

// Object as a Map - Write a function countWordApperances(txt) that
// return a map (object) in which the key is a word and the value is the
// count (how many times this word appeared in the text)

var wordApperancesMap = {

}


function countWordApperances(txt) {
    txt = txt.split(' ');
    for (var i = 0; i < txt.length; i++) {
        if (!wordApperancesMap[txt[i]]) {
            wordApperancesMap[txt[i]] = 1;
        } else {
            wordApperancesMap[txt[i]]++;
        }
    }
    return wordApperancesMap
}

var userTxt = prompt('Enter text to check how many times each words appears');
countWordApperances(userTxt)

for (var key in wordApperancesMap) {
    if (wordApperancesMap[key] > 1)
        console.log('The word: ', key, ' appeard ', wordApperancesMap[key], ' times')
    else console.log('The word: ', key, ' appeard ', wordApperancesMap[key], ' time')
}


