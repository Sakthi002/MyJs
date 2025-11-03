// 1. ABSTRAACTION
// - Hiding Internal details and showing only essential features.

class Car {

    start() {
        this.#injectFuel();
        this.#ignite();
        console.log("Engine started...");
    }

    #injectFuel() {
        console.log('Injecting fuel');
    }

    #ignite() {
        console.log("Igniting the engine");
    }
}

const myCar = new Car();
myCar.start()
// - End user doesnt want to know what is happening once they pressed start
// - Here we hided #injectFuel and #ignite to the user - and showing only start()

// ==============================================================================================================================

// 2. ENCAPSULATION
// - Group related properties and methods and restrict direct access to internal data.

class Car1 {
    #speed = 0;

    accelarate() {
        this.#speed += 10;
    }

    getSpeed() {
        return this.#speed;
    }
}

// - We should allow end user to directly manipulate speed - it will give disaster
// - Bundle data (#speed) with logic (accelerate() and getSpeed()).
// - The speed value is protected — the user can’t directly change it (car.#speed = 100; → ❌ error).

// ==============================================================================================================================

// 3. INHERITANCE
// - Inherits properties and methods from its parent and also has its own properties and methods

class Car2 {

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log("Driving by fuel");
    }
}

class ElectricCar extends Car2 {

    constructor(make, model, batteryPercentage) {
        super(make,model);
        this.batteryPercentage = batteryPercentage;
    }

    charge() {
        console.log("Charging car...")
    }
}

const tesla = new ElectricCar("Tesla", "V1", 90);
tesla.drive()

// - Electric Car extends properties and methods from it parent - so we dont need to define again

// ==============================================================================================================================

// 4. POLYMORPHISM
// - Methods behave differently based on Object type

class Car3 {
    drive() {
        console.log("Driving by fuel");
    }
}

class ECar extends Car3 {
    drive() {
        console.log("Driving by battery");
    }
}

const myCars = [new Car3(), new ECar()];

myCars.forEach(car => {
    car.drive();
})

// - drive is same method - but behaves differently based on Object
// - Both classes have a drive() method.
// - Behavior depends on the actual object type.
// - This is runtime polymorphism (method overriding).

// ==============================================================================================================================

// 5. COMPOSITION
// - Building classes by combining other classes — ‘Has-A’ relationship.

class Engine {
    start() {
        console.log('Engine staarts');
    }
}

class Car4 {
    constructor() {
        this.engine = new Engine();
    }

    startCar() {
        this.engine.start();
    }
}

const car4 = new Car4();
car4.startCar();

// engine value defined from another class - Car has a Engine

// ==============================================================================================================================
