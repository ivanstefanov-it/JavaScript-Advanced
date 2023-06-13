// Super - Refers to the parent class  
//        Commonly used to invoke constructor of a parent class

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 25);
const hawl = new Hawk("hawl", 5, 200);

console.log(rabbit.name);//rabbit
console.log(rabbit.age);//1
console.log(rabbit.runSpeed);//40