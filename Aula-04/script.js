// .map()
const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
})

console.log(numbersMultipliedByTwo); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] // O array original não é alterado

// .filter()
const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
});

console.log(evenAges); // [8, 30, 22, 40]

// .reduce()

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 0);

console.log(sumOfAges); // 140