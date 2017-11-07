'use strict';
console.log('Ex 52')


// Create a students array
//  Read student names until “quit” is entered and populate the
// students array with student objects
//  Read 3 grades for each student
//  Calc avg for each student
//  Write the function findWorstStudent(students)
//  Write the function sortStudentsByGrade(students)
//  Write the function sortStudentsByName(students)

var students = [];

var studentName = prompt('Please enter students names, enter quit when you done');
while (studentName !== 'quit') {
    students.push(studentName);
    studentName = prompt('Please enter students names, enter quit when you done');
}


var studentByGrades = students.slice();
console.log(students);
console.log('The worst student is: ', findWorstStudent(students));
console.log('The students sorted by grade: ', studentByGrades.sort(sortStudentsByGrade));
console.log('The students sorted by names: ', students.sort(sortStudentsByName));



function CreateStudent(name) {
    var student = {
        name: name,
        grade1: +prompt('grade 1?'),
        grade2: +prompt('grade 2?'),
        grade3: +prompt('grade 3?'),
    }
    return student
}

for (var i = 0; i < students.length; i++) {
    students[i] = CreateStudent(students[i]);
    students[i].avg = parseInt((students[i].grade1 + students[i].grade2 + students[i].grade3) / 3);
}

function findWorstStudent(students) {
    var worst = students[0];
    for (var i = 1; i < students.length; i++) {
        if (students[i].avg < worst.avg) worst = students[i];
    }
    return worst;
}


var studentByGrades = students.slice();
function sortStudentsByGrade(a, b) {
    return a.avg - b.avg;
}


function sortStudentsByName(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
};