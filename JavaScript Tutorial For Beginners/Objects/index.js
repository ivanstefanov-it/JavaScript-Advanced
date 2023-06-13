// Objects = A group of properties and methods
//           properties = what an object has
//           methods = what am object do
//           use . to access properties and methods

const car = {
    model:"Mustang",
    color:"red",
    year: 1969,

    drive : function(){
        console.log("You drive the car!");
    },
    brake : function(){
        console.log("You step on the brakes!");
    }
};

console.log(car.model); //Mustang
console.log(car.color); //Red
console.log(car.year); //1969
car.drive();// You drive the car!
car.brake();// You step on the brakes!