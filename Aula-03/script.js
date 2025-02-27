const names = ["Felipe", "João", "Maria", 10 , false];

const joao = names[1]

names.push("Pedro"); // adiciona um elemento no final do array
names.unshift("Fernanda"); // adiciona um elemento no inicio do array

console.log(names);

names.shift(); // remove o primeiro elemento

console.log(names);

// remove o ultimo elemento
names.pop(); // removeu Pedro
names.pop(); // removeu false
names.pop(); // removeu 10

console.log(names);

// modificando um elemento

names[2] = "Gustavo";

console.log(names); // o nome "Maria" foi substituido por "Gustavo"

// verificando o index(posição) de um elemento

console.log(names.indexOf("Felipe")); // 0

// ordenando uma lista em ordem alfabetica

console.log(names.sort());

// verificando se a variável é um array

console.log(Array.isArray(names));

