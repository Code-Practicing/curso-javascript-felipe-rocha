const person = {
    firstName: "Felipe",
    lastName: "Rocha",
    age: "21",
    hobbies: ["Assistir F1", "Jogar Futebol", "Ler"],
    dog: {
        name: "Dumbo",
        age: 3,
    },
};

// Forma convencional de acessar os valores de um objeto
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Destructuring: outra forma de acessar vários valores de um objeto

const { 
    firstName: primeiroNome, 
    lastName, 
    age, 
    hobbies,
    dog: {name, age: dogAge},
} = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

// desafio: acessar o hobby "ler"
console.log(person.hobbies[2]);

console.log(person.dog.name);
console.log(dogAge);
