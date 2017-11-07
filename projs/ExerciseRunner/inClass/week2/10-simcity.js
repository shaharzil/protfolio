console.log('10-simcity');

var gCities = ['A', 'B', 'C', 'D'];
var gDistancesMat = createDistancesMat();

console.table(gDistancesMat);
// var res = getFarthest(gDistancesMat, gCities[0])
// console.log('Farthest City', res);
printFarthests();

printMostCentralCity(gDistancesMat);

function createDistancesMat() {
    var mat = [
        [0, 18, 10, 12],
        [18, 0, 17, 20],
        [10, 17, 0, 13],
        [12, 20, 13, 0]
    ];

    return mat;
}

function printFarthests() {
    for (var i = 0; i < gCities.length; i++) {
        var city = gCities[i];
        var farthest = getFarthest(gDistancesMat, city)
        console.log('City: ', city, ' Farthest:', farthest);
    }
}

// Returns the farthest city, and also the distance
function getFarthest(distancesMat, city) {

    var cityIdx = gCities.indexOf(city);
    var cityDistances = distancesMat[cityIdx];

    var maxDistance = Math.max(...cityDistances);
    // console.log('maxDistance',maxDistance);

    var maxDistanceCityIdx = cityDistances.indexOf(maxDistance);
    // console.log('maxDistanceCityIdx',maxDistanceCityIdx);

    var farthestCity = gCities[maxDistanceCityIdx]

    var res = {city: farthestCity, distance: maxDistance};
    return res;
}


function printMostCentralCity(distancesMat) {
    var maxDistances = [];
    
    // Find max distance per city
    for (var i = 0; i < gCities.length; i++) {
        var cityDistances = distancesMat[i];
        var maxDistance = Math.max(...cityDistances);
        maxDistances.push(maxDistance);
    }

    console.log('maxDistances ', maxDistances);
    var minDistance = Math.min(...maxDistances);
    // console.log('minDistance ', minDistance);

    var cityIdx = maxDistances.indexOf(minDistance);
    // console.log('cityIdx ', cityIdx);

    var city = gCities[cityIdx];
    console.log('Most Central City is: ', city);
    
}


