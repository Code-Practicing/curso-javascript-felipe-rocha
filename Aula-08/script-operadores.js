// AND = &&
// OR = ||
// NOT = ! 

const sum1 = 2 + 2;
const sum2 = 3 + 3;
const sum3 = 4 + 4;

if (sum1 === 4 && sum2 === 6) {
    console.log('sum1 is 4 and sum2 is 6!');
}

if (sum2 === 6 || sum3 === 10) {
    console.log('sum2 is 6 or sum3 is 10!');
}

// Ternary Operator

// mesma coisa que o bloco comentado abaixo, mas simples
let number = sum1 === 4 ? 4 : 8;

// if (sum1 == 3) {
//     number = 4;
// } else {
//     number = 8;
// }

console.log(number);