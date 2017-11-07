'use strict';
console.log('Ex 51')



// o Create a monsters array with 4 monsters
// o Each monster should also have
//  id – a unique sequential number
//  name – read from user
//  power (random 1-100)
// o Write the function: findMostPowerful(monsters)
// o Write the function: breedMonsters(monster1, monster2)
// the function returns a new monster where power is an
// average, and name is a mix – half parent1, half parent2



var monsters = [{ id: 123456, name: prompt('monster1 name?'), power: parseInt(Math.random() * 101) },
{ id: 234567, name: prompt('monster2 name?'), power: parseInt(Math.random() * 101) },
{ id: 345678, name: prompt('monster3 name?'), power: parseInt(Math.random() * 101) },
{ id: 456789, name: prompt('monster4 name?'), power: parseInt(Math.random() * 101) }
]

console.log('The monsters: ', monsters)


function findMostPowerful(monsters) {
    var strongest = monsters[0];
    for (var i = 1; i < monsters.length; i++) {
        if (monsters[i].power > strongest.power) {
            strongest = monsters[i];
        }
    }
    return strongest;
}

console.log('The most powerful monster: ', findMostPowerful(monsters))


function breedMonsters(monster1, monster2) {
    var babyMonster = {
        id: 567890
    }
    babyMonster.power = (monster1.power + monster2.power) / 2;
    babyMonster.name = monster1.name.slice(0, monster1.name.length / 2) +
        monster2.name.slice(monster2.name.length / 2, monster2.name.length);
    return babyMonster;
}

console.log('The new baby is: ', breedMonsters(monsters[0], monsters[1]))