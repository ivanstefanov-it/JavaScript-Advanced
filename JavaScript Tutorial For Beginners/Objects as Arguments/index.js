class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 1969, "red");
const car2 = new Car("Carvette", 1986, "blue");
const car3 = new Car("BMW", 2022, "green");

displayInfo(car1);// Mustang, 1969, red
displayInfo(car2);// Carvette, 1986, blue
displayInfo(car3);// BMW, 2022, green

changeColor(car3, "yellow");

displayInfo(car3);// BMW, 2022, yellow

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}