let i = 0;

while (i < 10) {
    console.log("index é menor do que 10!");
    i++; // mesma coisa que i = i + 1 -ou- i += 1
};

const person = {
    name: "Jane",
    age: 21,
}

for (property in person) {
    console.log(person[property]); 
}