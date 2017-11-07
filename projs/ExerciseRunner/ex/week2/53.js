'use strict';
console.log('Ex 53')



//  Build a data structure for an airline:
//  plane
// i. seatCount
//  passenger
// i.id (7 digits random number)
// ii.fullName
// iii.flights (array)
//  flight
// i. at (date)
// ii. src (origin airport)
// iii. dest
// iv. plane (pointer to a plane)
// v. passengers (array)
//  Initialize with consistent data (data that makes sense):
//  Create an array with 5 passengers
//  Create an array of 2 planes
//  Create an array with 2 flights, each flight has a plane property
// that points to a plane object, and an array of pointers to passengers
//  Write functions:
// i. isFlightFullyBooked(flight)
// ii. getFrequentFlyers () – returns the passengers with
// maximal flights count 


var plane = [
    { seatCount: 2 },
    { seatCount: 3 }
]


var flight = [
    { at: '02.11.17', scr: 'Berlin', dest: 'New York', plane: plane[0] },
    { at: '02.11.17', scr: 'Tel aviv', dest: 'London', plane: plane[1] },
    { at: '02.11.17', scr: 'Paris', dest: 'Galapagos', plane: plane[1] }
]

var passengers = [
    { id: getId(), fullName: 'chompey', flight: [flight[0], flight[2]] },
    { id: getId(), fullName: 'lily', flight: flight[0] },
    { id: getId(), fullName: 'spay', flight: [flight[1], flight[0]] },
    { id: getId(), fullName: 'pitch', flight: flight[1] },
    { id: getId(), fullName: 'tony', flight: [flight[0], flight[2], flight[1]] }
]

flight[0].passengers = [passengers[0], passengers[1], passengers[4]];
flight[1].passengers = [passengers[2], passengers[3]];

console.log('Is the flight fully booked? ' , isFlightFullyBooked(flight[1]))
console.log('The most frequent flyer is: ' , getFrequentFlyers())


function getId() {
    return parseInt(Math.random() * (10000000 - 1000000) + 1000000)
}


function isFlightFullyBooked(flight) {
    var isFlightBooked = false;
    if (flight.passengers.length >= flight.plane.seatCount) {
        isFlightBooked = true;
    }
    return isFlightBooked;
}


function getFrequentFlyers() {
    var frequentFlyers = [];
    var flightCount = 0;
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].flight.length > flightCount) {
            flightCount = passengers[i].flight.length
        }
    }
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].flight.length === flightCount) {
            frequentFlyers.push(passengers[i])
        }
        
    }
    return frequentFlyers
}

