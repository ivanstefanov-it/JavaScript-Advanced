class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 1969, "red");
const car2 = new Car("Corvette", 1986, "blue");
const car3 = new Car("BMW", 2022, "green");

const cars = [car1, car2, car3];

console.log(cars[0].model);// Mustang
console.log(cars[1].model);// Corvette
console.log(cars[2].model);// BMW

cars[0].drive();// You drive the Mustang
cars[1].drive();// You drive the Corvette
cars[2].drive();// You drive the BMW

startRace(cars); // You drive the Mustang
                 // You drive the Corvette
                 // You drive the BMW

function startRace(cars){
    for (const car of cars) {
        car.drive();
    }
}