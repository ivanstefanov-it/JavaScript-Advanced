// Inheritance - a child class can inherit all the methods 
//               and properties from another class

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is spleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);// true
console.log(rabbit.name);// rabbit
rabbit.eat();// This rabbit is eating
rabbit.sleep();// This rabbit is spleeping
rabbit.run();// This rabbit is running

console.log();
console.log(fish.alive);// true
console.log(fish.name);// fish
fish.eat();// This fish is eating
fish.sleep();// This fish is spleeping
fish.swim();// This fish is swiming

console.log();
console.log(hawk.alive);// true
console.log(hawk.name);// hawk
hawk.eat();// This hawk is eating
hawk.sleep();// This hawk is spleeping
hawk.fly();// This hawk is flying