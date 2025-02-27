# Este é o README do vídeo do "Curso de JavaScript para completos iniciantes" do Felipe Rocha

Vídeo do curso está disponível no [canal do YouTube do Felipe Rocha](https://youtube.com/playlist?list=PLm-VCNNTu3LnlPhqxx03kvjQd3qF6EBdz&si=WoinraHxEsf6kZwM)

---

### Para criar integrar o arquivo do javascript ao html, basta dentro do `body` do html, colocar **`<script scr="caminho-do-cript.js"></script>`**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

### O comando **`alert(' ')`** faz com que apareça um alerta pop-up na tela, porém paralisa todo o resto da página até que clique no botão **`ok`**

![alert pop-up](midia/alert-pop-up.png)

### No **`JavaScript`** tem 3 formas de declarar variáveis, usando **`var`**, **`const`** e **`let`**:

```js
var message = "Hello World!"

const message = "Hello World!"

let message = "Hello World!"
```

✴️ `var` ➜ As variáveis declaradas com **`var`** tem **`function scope / escopo de função`**, o que significa que elas são acessíveis somente dentro da função na qual foi declarada, mas caso ela seja declarada fora da função, podendo estar também dentro de um **`for`**, **`if`**, **`witch`** e **`while`**, ela será uma **`função global`**.

✴️ `const` e `let` ➜ As variáveis declaradas com **`const`** e **`let`** tem **`block scope / escopo de bloco`**, o que significa que elas são acessíveis somente dentro da **`função`** na qual foi declarada ou somente dentro do **`bloco (for, if, witch e while`** na qual foi declarada, mas caso ela seja declarada fora da função ou do bloco, ela será uma **`global function / função global`**.
 
| Tipo   | Redeclaração | Reatribuição | Modificação de Objetos/Arrays |
|--------|--------------|--------------|-------------------------------|
| `var`  | **Sim**      | **Sim**      | **Sim**                       |
| `let`  | **Não**      | **Sim**      | **Sim**                       |
| `const`| **Não**      | **Não**      | **Sim**                       |

#### Redeclaração X Reatribuição:
* A **`redeclaração`** ocorre quando você tenta declarar uma variável com o mesmo nome no mesmo escopo. Em outras palavras, é criar uma nova variável com um nome que já foi usado anteriormente.

```js
var mensagem = "Olá";
var mensagem = "Mundo"; // Redeclaração permitida
console.log(mensagem); // "Mundo"
```

```js
let mensagem = "Olá";
let mensagem = "Mundo"; // Erro: Identifier 'mensagem' has already been declared
```

```js
const mensagem = "Olá";
const mensagem = "Mundo"; // Erro: Identifier 'mensagem' has already been declared
```

* A **`reatribuição`** ocorre quando você tenta atribuir um novo valor a uma variável já declarada. Em outras palavras, é mudar o valor de uma variável existente.

```js
var mensagem = "Olá";
mensagem = "Mundo"; // Reatribuição permitida
console.log(mensagem); // "Mundo"
```

```js
let mensagem = "Olá";
mensagem = "Mundo"; // Reatribuição permitida
console.log(mensagem); // "Mundo"
```

```js
const mensagem = "Olá";
mensagem = "Mundo"; // Erro: Assignment to constant variable
```

**Caso especial:** **`const`** com Objetos e Arrays

* **`const`** com Objetos: Quando você declara um objeto com `const`, você não pode reatribuir a variável para apontar para um novo objeto, mas pode modificar as propriedades do objeto existente.

```js
nomeDoObjeto.nomeDaPropriedade;
```

```js
const pessoa = { nome: "João", idade: 30 };

// Modificando propriedades do objeto
pessoa.nome = "Maria"; // Permitido
pessoa.idade = 25; // Permitido

console.log(pessoa); // { nome: "Maria", idade: 25 }

// Tentando reatribuir a variável
pessoa = { nome: "Pedro" }; // Erro: Assignment to constant variable
```

* **`const`** com Arrays: Quando você declara um array com `const`, você não pode reatribuir a variável para apontar para um novo array, mas pode modificar os elementos do array existente.
```js
const numeros = [1, 2, 3];

// Modificando elementos do array
numeros.push(4); // Permitido
numeros[0] = 10; // Permitido

console.log(numeros); // [10, 2, 3, 4]

// Tentando reatribuir a variável
numeros = [5, 6, 7]; // Erro: Assignment to constant variable
```

#### Quando usar `var`, `let` ou `const`?

**`var`**: Evite usar `var` em código moderno, pois seu comportamento de escopo de função e permissão de redeclaração podem causar confusão e bugs.

**`let`**: Use `let` quando precisar de uma variável que pode ser reatribuída e que tenha escopo de bloco.

**`const`**: Use `const` para variáveis que não precisam ser reatribuídas. É a escolha padrão para a maioria dos casos.

## console.log()

O **`console.log()`** é um método que exibe uma mensagem no console do navegador.

```js
const dia = '21';
const mes = 'fevereiro';

console.log(`Hoje é ${dia} de ${mes}`)
```

* É possível adicionar uma propriedade para exibir a string em **letras maiúsculas** e também **letras minúsculas**.

```js
const firstName = 'Isabelle';
const lastName = 'Vitória';

console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);
```

### .split()

* O método .split() é usado para dividir uma string em um array de substrings com base em um separador especificado.

```js
string.split(separador, limite);
```

**`OBS:`** Tanto o separado, quanto o limite são opicionais.

1. Dividir por caractere:
   
```js
const frase = "Olá, mundo! Como vai você?";
console.log(frase.split(" ")); // Divide por espaços
// Saída: ["Olá,", "mundo!", "Como", "vai", "você?"]
```

2. Dividir por uma vírgula:

```js
const lista = "maçã,banana,laranja,uva";
console.log(lista.split(",")); // Divide por vírgulas
// Saída: ["maçã", "banana", "laranja", "uva"]
```

3. Dividir por caracteres individuais:

```js
const palavra = "JavaScript";
console.log(palavra.split("")); // Divide por string vazia
// Saída: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

4. Dividir usando um limite:

```js
const frase = "Olá, mundo! Como vai você?";
console.log(frase.split(" ", 3)); // Limita a 3 divisões

// Saída: ["Olá,", "mundo!", "Como"]
```

5. Dividir usando uma expressão regular:

```js
const texto = "JavaScript é incrível! Vamos aprender?";
console.log(texto.split(/[ ,!]/)); // Divide por espaços, vírgulas ou "!"
// Saída: ["JavaScript", "é", "incrível", "", "Vamos", "aprender?"]
```

**Casos especiais:**

1. Separador no final da string:

```js
const texto = "maçã,banana,";
console.log(texto.split(","));
// Saída: ["maçã", "banana", ""]
```

2. Separador omitido:

```js
const texto = "JavaScript";
console.log(texto.split());
// Saída: ["JavaScript"]
```

3. Separador que não existe na string:

```js
const texto = "JavaScript";
console.log(texto.split("-"));
// Saída: ["JavaScript"]
```

### .toString()

O **`.toString()`** converte o dado para string, por exemplo, um número para string.

## Null e Undefined

1.  é um valor primitivo que representa a **ausência intencional** de valor. Ele é usado para indicar que uma variável ou propriedade foi explicitamente definida como **"sem valor"**.

* Atribuição explícita:

```js
let y = null;
console.log(y); // null
```

* Limpar um valor:

```js
let z = "Texto";
z = null; // Agora z não tem valor
console.log(z); // null
```

* Propriedade intencionalmente sem valor:

```js
const pessoa = { nome: "Maria", idade: null };
console.log(pessoa.idade); // null
```


1. **Undefined** é um valor que indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.

**Quando ocorre:**
  
- Uma variável é declarada, mas não inicializada.
- Uma função não retorna explicitamente um valor.
- Uma propriedade de objeto não existe.
- Um parâmetro de função não é fornecido.

* Variável não inicializada:

```js
let x;
console.log(x); // undefined
```

* Função sem retorno:

```js
function soma(a, b) {
  // Não há return
}
console.log(soma(2, 3)); // undefined
```   

* Propriedade inexistente:

```js
const obj = { nome: "João" };
console.log(obj.idade); // undefined
```   

* Parâmetro não fornecido:

```js
function saudacao(nome) {
  console.log("Olá, " + nome);
}
saudacao(); // Olá, undefined
```

## Array/Lista

Para criar uma lista, basta criar a variável e atriibuir os dados dentro de colchetes:

```js
const lista = ["exemplo", "exemplo2", "exemplo3"]
```

✴️ **`Atenção:`** não é possível definir o tipo de conteúdo de uma lista no JavaScript, pois a linguagem não é tipada, para isso usamos o TypeScript, que é uma linguagem construída em cima do JavaScript e é tipada.

### Acessando o **`array / lista`**

Para acessar a lista, você deve criar uma nova variável atribuir a lista desejada e especificar dentro do colchetes a posição do elemento da lista a ser acessado, lembrando que a lista começa a partir do 0.

```js
const names = ["Felipe", "João", "Maria"];

const joao = names[1]

console.log(joao); // joao
```

### .push()

Adiciona um elemento no final do array.

```js
const names = ["Felipe", "João", "Maria"];

names.push("Pedro")

console.log(names); // "Felipe", "João", "Maria", "Pedro"
```

### .unshift()

Adiciona um elemento no início do array.

```js
const names = ["Felipe", "João", "Maria"];

names.unshift("Pedro")

console.log(names); // "Pedro", "Felipe", "João", "Maria"
```

### .pop()

Remove o último elemento do array.

```js
const frutas = ["maçã", "banana", "laranja"];

const ultimaFruta = frutas.pop();

console.log(ultimaFruta); // Saída: "laranja"
console.log(frutas); // Saída: ["maçã", "banana"]
```

### .shift()

Remove o primeiro elemento de um array e retorna esse elemento. Além disso, ele modifica o array original, reduzindo seu tamanho em 1.

```js
const frutas = ["maçã", "banana", "laranja"];

const primeiraFruta = frutas.shift();

console.log(primeiraFruta); // Saída: "maçã"
console.log(frutas); // Saída: ["banana", "laranja"]
```

### Modificar um elemento do array

Primeiro você acessa a posição que o elemento está, depois você atribui o novo valor a ele.

```js
const frutas = ["maçã", "banana", "laranja"];

frutas[3] = "tomate"

console.log(frutas); // Saída: ["banana", "tomate"]
```

### .indexOf()

Verifica o index de um elemento.

```js
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas.indexOf("banana")); // Saída: 1

console.log(frutas.indexOf("morango")); // Saída: -1
```

### .sort()

Orgazina o array em ordem alfabética.

```js
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas.sort()); // Saída: "banana",  "laranja", "maçã"
```

### .lenght

Apresenta a quantidade de elementos de um array.

```js
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas.length); // Saída: 3
```

### `Array.isArray()`

Verifica se uma variável é um array.

```js
const frutas = ["maçã", "banana", "laranja"];
const texto = "Olá, mundo!";
const numero = 42;

console.log(Array.isArray(frutas)); // Saída: true
console.log(Array.isArray(texto));  // Saída: false
console.log(Array.isArray(numero)); // Saída: false
```

## Map, Filter e Reduce

### .map()

Percorre cada elemento de um array, aplica uma transformação a cada um desses elementos e retorna um novo array com os resultados. Ele não altera o array original.

```js
let pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Carlos", idade: 35 }
];

let nomes = pessoas.map(pessoa => pessoa.nome);

console.log(nomes); // Saída: ["Alice", "Bob", "Carlos"]
```

### .filter()

Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```js
const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
});

console.log(evenAges); // [8, 30, 22, 40]
```

### .reduce()

Executa uma função reducer (fornecida) para cada elemento do array, resultando em um único valor de retorno.

```js
const ages = [8, 13, 27, 30, 22, 40];

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 0);

console.log(sumOfAges); // 140
```

### Objetos

É uma coleção de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. Ele é usado para armazenar dados estruturados e pode representar coisas do mundo real, como uma pessoa, um produto, um carro, etc.

```js
const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: "21",
    hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
};
```

### Acessando uma propriedade de um objeto

Podemos atribuir a uma variável o valor de uma propriedade.

```js
const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: "21",
    hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;

console.log(firstName); // Felipe
console.log(lastName); // Rocha
console.log(age); // 21
console.log(hobbies); // ['Assistir F1', 'Jogar Futebol', 'Ler']
```

### Destructuring

Forma mais fácil de acessar várias propriedades de uma vez em uma só linha.

```js
const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: "21",
    hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
};

const {firstName, lastName, age, hobbies} = person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
```

`OBS:` é possível renomear a propriedade da seguinte forma

```js
const {firstName: primeiroNome, lastName, age, hobbies} = person;
```

### Adicionando propriedades a um objeto

É possível adicionar propriedades a um objeto fora do bloco do objeto:

```js
const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: "21",
    hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
};

person.dog = "Dumbo" 

console.log(person.dog) // Dumbo
```

### Objetos dentro de objetos

É possível adicionar objetos dentro de um objeto.

```js
const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: "21",
    hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
    dog: {
        name: "Dumbo",
        age: "2"
    }
};

const {firstName, lastName, age, hobbies} = person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(person.dog.age); // Dumbo
```

✴️ Para fazer o **destructuring** de um objeto que está dentro de outro objeto, é da forma a seguir:

```js
const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: "21",
    hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
    dog: {
        name: "Dumbo",
        age: "2"
    }
};

const {firstName, lastName, age, hobbies, dog: {name, age: dogAge}, } = person; // também adicionar um novo nome

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);

console.log(person.dog.age); // Dumbo
console.log(dogAge); // 2
```

## Convertendo variáveis para JSON

### JSON.stringify()

Converte um objeto ou valor em uma `string` no formato `JSON`. Ele é muito útil quando você precisa enviar dados para um servidor, armazenar dados localmente ou simplesmente visualizar um objeto como uma string.

```js
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
```

### JSON.parse()

Transforma um JSON em uma lista.

```js
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
```

## Loops

São laços de repetição que são usados para executar um bloco de código várias vezes.

### for ()

O loop `for` é o mais comum e é usado quando você sabe quantas vezes quer repetir o código.

```js
for (let i = 0; i <= 5; i++) {
    console.log(i); 
}
```

### for of

É usado para iterar sobre elementos de objetos iteráveis, como arrays, strings, mapas, etc.

```js
const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let car of cars) {
    console.log(car);
}
```

### .forEach()

É usado para iterar sobre elementos de um array. Ele executa uma função para cada elemento.

```js
const cars = ["Ferrari", "Tesla", "Mercedes"];

cars.forEach(function(car) {
    console.log(car);
});
```

### while

Repete um bloco de código enquanto uma condição for verdadeira.

```js
let i = 0;

while (i < 10) {
    console.log("index é menor do que 10!");
    i++; // mesma coisa que i = i + 1 -ou- i += 1
};
```

### for in

É usado para iterar sobre as propriedades enumeráveis de um objeto.

```js
const person = {
    name: "Jane",
    age: 21,
}

for (property in person) {
    console.log(person[property]); // Jane, 21
}
```

## Condicionais

### if & else

### else if

### AND ( && ) e OR ( || )

### Ternary Operator

### Switch