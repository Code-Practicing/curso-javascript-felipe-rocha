const toDo = [
    {
        id: 1,
        description: "Estudar JS",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Estudar React",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Estudar TypeScript",
        isCompleted: true,
    },
];

const descriptionOfTheLastToDo = toDo [2].description;
console.log(descriptionOfTheLastToDo);

console.log(toDo[2].description);