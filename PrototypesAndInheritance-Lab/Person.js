class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        const tokens = value.split(' ');
        this.firstName = tokens[0];
        this.lastName = tokens[1];
    }
}

const myPerson = new Person('Ivan', 'Stefanov')
console.log(myPerson.fullName) //Ivan Stefanov

myPerson.fullName = 'Ivan Rumenov';

console.log(myPerson.firstName) //Ivan
console.log(myPerson.lastName) //Rumenov
console.log(myPerson.fullName) //Ivan Rumenov