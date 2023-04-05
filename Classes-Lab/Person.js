class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age} email: ${this.email})`;
    }
};

const myPerson = new Person('Ivan', 'Stefanov', 29, 'ad@ads.das');
console.log('' + myPerson)