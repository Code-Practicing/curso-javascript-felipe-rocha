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

const toDoJSON = JSON.stringify(toDo);

console.log(toDoJSON); // [{"id":1,"description":"Estudar JS","isCompleted":false},{"id":2,"description":"Estudar React","isCompleted":true},{"id":3,"description":"Estudar TypeScript","isCompleted":true}]

const toDoList = JSON.parse(toDoJSON);

console.log(toDoList); // [ { id: 1, description: 'Estudar JS', isCompleted: false }, { id: 2, description: 'Estudar React', isCompleted: true }, { id: 3, description: 'Estudar TypeScript', isCompleted: true } ]