console.log('Metushelah');
/*
Metushelah
Build a data structure that represent a family tree, we might make it graphical later, but for now we focus on the data structure:
1)	A person object that has:
i.	an id (1001,1002, etc ), 
ii.	a name, 
iii.	a birthdate (a date object)
iv.	parents – array by size of 2
v.	childs –  array by any size
2)	Build a data structure byId (an object) that will store all people by their ID
3)	write functions:
i.	 addChild(toPersonId, theChild)
ii.	addParent(toPersonId, parentPerson)

4)	Use those functions to create a tree with some data (i.e. your family, from Adam to Noah, etc.)
5)	Write a function that prints the name of the parents that gave their son, the longest name.
*/

var gNextId         = 1001;
var gPersons        = createPersons();
var gIdToPersonMap  = createPersonsMap(gPersons);

createChild('shahar', 1001, 1002);
createChild('noam', 1001, 1002);
addPerson('lihi')
createChild('Eitan', 1001, 1005);
createChild('Adam', 1001, 1005)


function createChild(childName, mama, papa) {
    var theChild = addPerson(childName);
    addChild(mama, theChild);
    addParent(theChild.id, gIdToPersonMap[mama]);
    addChild(papa, theChild);
    addParent(theChild.id, gIdToPersonMap[papa]);
}

console.log('gPersons', gPersons);  
console.log('gIdToPersonMap', gIdToPersonMap);

function addChild(toPersonId, theChild) {
    gIdToPersonMap[toPersonId].childs.push(theChild);
}
function addParent(toPersonId, parentPerson) {
    gIdToPersonMap[toPersonId].parents.push(parentPerson);
}



function createPersonsMap(persons) {
    var byId = {};
    for (var i = 0; i < persons.length; i++) {
        var person = persons[i];
        byId[person.id] = person;
    }
    return byId;
}


function addPerson(name) {
    var newPerson = createPerson(name); 
    // console.log(newPerson);  
    gPersons.push(newPerson);
    gIdToPersonMap[newPerson.id] = newPerson;
    return newPerson;
}


function createPersons() {
    var persons = [];
    var person1 = createPerson('michael');
    var person2 = createPerson('eti');
    persons.push(person1);
    persons.push(person2);
    return persons;
}

function createPerson(name) {
    return {
        id: gNextId++,
        name: name,
        birthdate: new Date(1978, 10, 2),
        parents: [],
        childs: []
    };
}

function longestName () {
    for (var i = 0; i < gPersons.length; i++) {
        if (gPersons[i].parents.length > 0) {
        var longestNameLengh = 0;
        var longestNameP = null;
        if (gPersons[i].name.length > longestNameLengh)
        longestNameP = gPersons[i]
        }
        return longestNameP.parents
    }
}

console.log(longestName())