console.log("DAY 31");

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }

// function Owner (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Car.prototype.wheelNumber = function () {
//     return 4;
// }

// const sakthi = new Owner("Sakthi", 30);
// const myCar = new Car("TATA", "PUNCH", "2025", sakthi);

// console.log(myCar);

// sakthi.age = 31;

// console.log(myCar);


class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    wheelNumber() {
        return 4;
    }
}

class LuxuryCar extends Car {

    constructor(make) {
        super(make)
    }

    luxuryCar() {
        console.log("I am a Luxury Car");
    }
}

const lux = new LuxuryCar("BMW");
console.log(lux);

const vehicle = {
    isLuxury: false,
    isFourWheeler: false,
    showInfo : function() {
        console.log(`This vehicle ${this.name} is if ${this.color}. Is it luxury vehicle? ${this.isLuxury}. Does it have 4 wheel? ${this.isFourWheeler}`);
    }
}

const car = Object.create(vehicle);
car.name = "Tesla";
car.color = "Steel";
car.isLuxury = true;
car.isFourWheeler = true;
car.showInfo()
console.log(car);

const bike = {
    name : "Avenger"
}

console.log(Object.getPrototypeOf(bike));

Object.setPrototypeOf(bike, vehicle);

console.log(bike instanceof Object);








