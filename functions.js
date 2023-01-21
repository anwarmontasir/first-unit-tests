// functions.js
function addTwoNumbers(x, y) {
    return x + y;
}

function sayHello(name) {
    if (name !== 'Will') {
        return `Hi there ${name}!`;
    } else {
        return `No more testing ${name}!`;
    }
}

function buildCar(carColor, carType) {
    let car = {};
    if (carColor) {
        car.color = carColor;
    }
    if (carType) {
        car.type = carType;
    }
    console.log('car!!!', car);
    return car;
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}