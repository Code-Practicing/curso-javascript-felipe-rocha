class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName () {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    static speak () {
        console.log("Hello World!!");
    }

    showAge () {
        console.log(`The age is ${this.age}`);
    }
}

const person = new Person ("Jane", "Doe", 40);

person.getFullName();
Person.speak();
person.showAge();