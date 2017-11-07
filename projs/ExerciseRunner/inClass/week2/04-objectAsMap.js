console.log('Object as Map');

var bestLanguageVotesMap = {c: 3,
                            cpp: 5,
                            python: 45,
                            javascript: 52 
                        };


var userBestLang = prompt('Whats your fav lang?');
if (!bestLanguageVotesMap[userBestLang]) {
   bestLanguageVotesMap[userBestLang] = 0; 
}
bestLanguageVotesMap[userBestLang] ++;

// console.log('bestLanguageVotesMap', bestLanguageVotesMap);


for (var lang in bestLanguageVotesMap) {
    console.log('The language ',lang, 'Has ', 
                bestLanguageVotesMap[lang], ' votes');
}