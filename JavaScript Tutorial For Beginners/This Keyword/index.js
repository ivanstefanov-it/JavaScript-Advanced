// This = reference to a particular object
//        The object depends on the immediate context

const car1 = {
    model:"Mustang",
    color:"red",
    year: 1969,

    drive : function(){
        console.log(`You drive the ${this.model}!`);
    },
    brake : function(){
        console.log("You step on the brakes!");
    }
};

const car2 = {
    model:"Corvette",
    color:"blue",
    year: 1986,

    drive : function(){
        console.log(`You drive the ${this.model}!`);
    },
    brake : function(){
        console.log("You step on the brakes!");
    }
};

console.log(car1.model); //Mustang
console.log(car1.color); //Red
console.log(car1.year); //1969
car1.drive();// You drive the car!
car1.brake();// You step on the brakes!

console.log(car2.model); //Corvette
console.log(car2.color); //Blue
console.log(car2.year); //1986
car2.drive();// You drive the car!
car2.brake();// You step on the brakes!