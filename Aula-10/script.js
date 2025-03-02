function sum(a, b = 10) {
    return a + b;
}

// Mesma coisa que a função de cima, que é uma função normal
const sumArrow = (a, b = 10) => {
    return a + b;
};

// Mesma coisa que a de cima
const sumArrow2 = (a, b = 10) => a + b;

const sumValue = sum(2);
const sumArrowValue = sumArrow(3);
const sumArrow2Value = sumArrow2(4);

console.log(sumValue);
console.log(sumArrowValue);
console.log(sumArrow2Value);