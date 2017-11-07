console.log('Objects!');

var pet1 = {
    name: 'Charli',
    age: 12,
    type: 'Cat',
    nicknames: ['chuchu', 'chuchku']
};

var pet2 = {
    name: 'Bobi', 
    type: 'Dog', 
    age: 91, 
    bestFriend: pet1
};

var pets = [pet1,pet2];
console.log('pets: ', pets);

function findOldestPet(pets) {
    var oldestPet = null;
    var maxAge = 0;
    for (var i = 0; i < pets.length; i++) {
        var pet = pets[i];
        if (pet.age > maxAge) {
            maxAge = pet.age;
            oldestPet = pet;
        }
    }
    return oldestPet;
}

var arr = [];
var res = findOldestPet(arr);
console.log('findOldestPet: Input:', arr, ' expected: null, Got: ', res);

res = findOldestPet(pets);
console.log('findOldestPet: Input:', pets, ' expected: ', pet2, ' Got: ', res);


// for (var prop in pet1) {
//     console.log(prop, pet1[prop]);
// }
// console.log('done');


// pet1.birthDate = new Date();
// pet1.isHappy = true;
// delete pet1.isHappy;



// var prop = 'type';
// pet1.type = 'Dog';
// pet1[prop] = 'Dog';


// var pet2 = pet1;
// foo(pet2);
// function foo(obj) {
//     obj.age = 90;
// }

// pet1.age++;

// console.log(pet2);



// Without Objects:
var petNames = ['Charli', 'Bobi']
var petTypes = ['Cat', 'Dog']
var petAges = [12, 5]

// for (var i = 0; i < petNames.length; i++) {
//     console.log(petNames[i], petTypes[i], petAges[i]);
// }







