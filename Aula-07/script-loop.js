for (let i = 0; i < 10; i++) {
    console.log(i);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];

// for
for (let i =0; i < cars.length; i++){
    console.log(cars[i]);
};

// for of
for (let car of cars) {
    console.log(car); // 
}

// forEach
cars.forEach(function(car, index) {
    console.log(index);
    console.log(car);
});

