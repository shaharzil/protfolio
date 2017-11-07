console.log('03-Objects');

function createCar(vendor, price) {
    var car = {
        vendor: vendor,
        price: price,
        createdAt: Date.now()
    }
    return car;
}

var car1 = createCar('Audi', 387383);
var car2 = createCar('Fiat', 443);

var cars = [car1, car2]

cars.sort(function(c1, c2){
    return c1.price - c2.price;
});
cars.sort(function(c1, c2){
    if      (c1.vendor > c2.vendor) return 1;
    else if (c1.vendor < c2.vendor) return -1;
    else                            return 0;
});



console.log('cars: ', cars);