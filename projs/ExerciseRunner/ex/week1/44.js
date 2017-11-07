'use strict';
console.log('Ex 44');



// Write a function countVotes(votes, candidateName) that counts how
// many votes this candidate got.
// i.e.: if the votes array looks like this: ['c1', 'c1', 'c2', 'c1']
// And the candidateName is : 'c2', the function returns 1.


var candidates = ['loser1', 'loser3', 'loser3', 'loser2', 'loser1', 'loser2', 'loser2', 'loser1', 'loser2']

function countVotes(candidateName) {
    var voteCount = 0;
    for (var i = 0; i < candidates.length; i++) {
        if (candidateName === candidates[i]) voteCount++
    }
    return voteCount
}

console.log(countVotes('loser2'))