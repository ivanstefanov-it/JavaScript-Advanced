// Constructor = special method of a class, accepts arguments and assigns properties

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Ivan", 21, 3.2);
const student2 = new Student("Stefan", 24, 1.5);

console.log(student1.name);// Ivan
console.log(student1.age);// 21
console.log(student1.gpa);// 3.2
student1.study();// Ivan is studying

console.log(student2.name);// Stefan
console.log(student2.age);// 24
console.log(student2.gpa);// 1.5
student2.study();// Stefan is studying