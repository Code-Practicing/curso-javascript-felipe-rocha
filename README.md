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

São estruturas usadas para tomar decisões no código com base em condições. Elas permitem que o programa execute diferentes blocos de código dependendo se uma condição é **`true`** ou **`false`**.

### if

É a condicional mais básica, ele executa um bloco de código se a condição for verdadeira.

```js
const sum = 1 + 1;

if (sum === 2) {
    console.log('Sum is 2!!'); // Sum is 2!!
}
```

✴️ Pode ser lido da seguinte forma ➜ Se a variável "sum" for igual a 2, exiba **`console.log('Sum is 2!!')`**.

**OBS:** " == " verifica somente o valor, já o " === " verifica o valor e o tipo.

### if ... else

Permite executar um bloco de código se a condição for verdadeira, caso seja falso, o outro bloco será executado.

```js
const sum = 1 + 1;

if (sum === 3) {
    console.log('Sum is 2!!');
} else {
    console.log('Sum is not 2!!'); // Sum is not 2!!
}
```

✴️ Pode ser lido da seguinte forma ➜ Se a variável "sum" for igual a 2, exiba **`console.log('Sum is 2!!')`**, **se não**, exiba **`console.log('Sum is not 2!!')`**.

### else if

É usado para testar várias condições em sequência. Se a primeira condição for falsa, ele testa a próxima, e assim por diante.

```js
const sum = 1 + 2;

if (sum === 2) {
    console.log('Sum is 2!!');
} else if (sum === 3) {
    console.log('Sum is 3!!');
} else {
    console.log('Sum is not 2!!');
}
```

✴️ Pode ser lido da seguinte forma ➜ Se a variável "sum" for igual a 2, exiba **`console.log('Sum is 2!!')`**, **se não**, verifique se é igual a 3, **se não**, exiba **`console.log('Sum is not 2!!')`**.

### AND ( && ) , OR ( || ) e NOT ( ! )

#### AND

Só é **verdadeiro** se os dois valores forem **verdadeiros**. 

|   Operando A   |   Operando B   | A && B |
|----------------|----------------|--------|
| `V` \| `true`  | `V` \| `true`  | `true` |
| `V` \| `true`  | `F` \| `false` | `false`|
| `F` \| `false` | `V` \| `true`  | `false`|
| `F` \| `false` | `F` \| `false` | `false`|

```js
const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
    console.log('sum1 is 4 and sum2 is 6!');
}
```

#### OR

É **verdadeiro** se pelo menos um dos valores forem **verdadeiros**

|   Operando A   |   Operando B   | A \|\| B |
|----------------|----------------|----------|
| `V` \| `true`  | `V` \| `true`  | `true`   |
| `V` \| `true`  | `F` \| `false` | `true`   |
| `F` \| `false` | `V` \| `true`  | `true`   |
| `F` \| `false` | `F` \| `false` | `false`  |

```js
const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 || sum2 === 8) {
    console.log('sum1 is 4 or sum2 is 8!');
}
```

#### NOT

**Inverte** o valor

|   Operando A   |        !A        |
|----------------|------------------|
| `V` \| `true`  | `F` \| `false`   |
| `F` \| `false` | `V` \| `true`    |

```js
const a = 3;

console.log(!(a === 3)); // false
```

### Ternary Operator

Ele é chamado de "ternário" porque usa três operandos: uma condição, um valor para quando a condição é verdadeira e outro valor para quando a condição é falsa.

É útil para definir variáveis baseando em uma condição. É uma forma abreviada de escrever uma condicional if...else. Ele é útil para decisões simples.

```js
condição ? valorSeVerdadeiro : valorSeFalso;
```

**`condição`**: Uma expressão que será avaliada como true ou false.

**`valorSeVerdadeiro`**: O valor retornado se a condição for true.

**`valorSeFalso`**: O valor retornado se a condição for false.

```js
const sum1 = 1 + 1;

let number = sum1 === 2 ? 2 : 4;

console.log(number); // 2
```

### Switch

É uma estrutura de controle usada para executar diferentes blocos de código com base no valor de uma expressão. Ele é uma alternativa ao uso de múltiplos `if...else` quando você precisa comparar uma única variável ou expressão com vários valores possíveis.

```js
let diaDaSemana = 4;

switch (diaDaSemana) {
    case 1:
        console.log("Sexta-Feira");
        break;
    case 2:
        console.log("Sábado");
        break;
    case 3:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}
```

✴️ `break` ➜ Ao  fim de cada case, deve-se usar o `break` para indicar o fim da execução, caso contrário, os outros casos vão ser executados também.

✴️ `default` ➜ É executado quando nenhum case responde à expressão.

## Falsy & Truthy

### Falsy

Valores que são considerados **`falsy`**:

1. **`false:`** O valor booleano **`false`**.

2. **`0:`** O número zero.

3. **`" ":`** Uma string vazia.

4. **`null:`** O valor **`null`**.

5. **`undefined:`** O valor **`undefined`**.

6. **`NaN:`** "Not a Number" (não é um número).

```js
// 1. false
if (false) {
    console.log("false é truthy.");
} else {
    console.log("false é falsy."); // Este será executado
}

// 2. 0
if (0) {
    console.log("0 é truthy.");
} else {
    console.log("0 é falsy."); // Este será executado
}

// 3. "" (string vazia)
if ("") {
    console.log("String vazia é truthy.");
} else {
    console.log("String vazia é falsy."); // Este será executado
}

// 4. null
if (null) {
    console.log("null é truthy.");
} else {
    console.log("null é falsy."); // Este será executado
}

// 5. undefined
if (undefined) {
    console.log("undefined é truthy.");
} else {
    console.log("undefined é falsy."); // Este será executado
}

// 6. NaN
if (NaN) {
    console.log("NaN é truthy.");
} else {
    console.log("NaN é falsy."); // Este será executado
}
```

### Truthy

Qualquer valor que não seja **`falsy`** é considerado **`truthy`**. Isso inclui:

1. **`true:`** O valor booleano **`true`**.

2. **`1:`** Qualquer número diferente de zero.

3. **`"texto":`** Qualquer string não vazia.

4. **`[]:`** Um array vazio (mesmo que esteja vazio, é truthy).

5. **`{}:`** Um objeto vazio.

6. **`function() {}:`** Uma função.

```js
// 1. true
if (true) {
    console.log("true é truthy."); // Este será executado
} else {
    console.log("true é falsy.");
}

// 2. 1 (ou qualquer número diferente de zero)
if (1) {
    console.log("1 é truthy."); // Este será executado
} else {
    console.log("1 é falsy.");
}

// 3. "texto" (string não vazia)
if ("texto") {
    console.log("String não vazia é truthy."); // Este será executado
} else {
    console.log("String não vazia é falsy.");
}

// 4. [] (array vazio)
if ([]) {
    console.log("Array vazio é truthy."); // Este será executado
} else {
    console.log("Array vazio é falsy.");
}

// 5. {} (objeto vazio)
if ({}) {
    console.log("Objeto vazio é truthy."); // Este será executado
} else {
    console.log("Objeto vazio é falsy.");
}

// 6. function() {} (função)
if (function() {}) {
    console.log("Função é truthy."); // Este será executado
} else {
    console.log("Função é falsy.");
}
```

## Funtions & Arrow Function

### Function

São blocos de código que podem ser definidos uma vez e reutilizados várias vezes. Elas são usadas para organizar o código, evitar repetição e encapsular lógica.

```js
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 10)); // 12
```

### Arrow Function

São uma sintaxe mais curta e moderna para escrever funções.

```js
const nomeDaFuncao = (parametro1, parametro2) => {
    // Código a ser executado
    return resultado; // Opcional
};
```

**Se a função tiver apenas uma expressão, as chaves {} e a palavra-chave return podem ser omitidas:**

```js
const nomeDaFunção = (parametro1, parametro2) => expressão;
```

**Se a função tiver apenas um parâmetro, os parênteses () podem ser omitidos:**

```js
const nomeDaFunção = parametro => expressão;
```

---

```js
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
```

## POO (Programação Orientada a Objetos)

Exemplo de uma classe:

```js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Criando um objeto a partir da classe
const pessoa1 = new Pessoa("João", 25);
pessoa1.saudacao(); // Saída: "Olá, meu nome é João e eu tenho 25 anos."
```

**`constructor():`** Um método especial que é chamado quando um objeto é criado a partir da classe. Ele é usado para inicializar as propriedades do objeto.

**`this:`** Refere-se à instância atual da classe (o objeto que está sendo criado).

**`Métodos:`** Funções que pertencem à classe e podem ser chamadas em seus objetos.

### Classes

São uma forma de criar objetos com propriedades e métodos compartilhados. Elas são uma sintaxe mais clara e organizada para trabalhar com herança e orientação a objetos.

```js
class NomeDaClasse {
    // Construtor (inicializa o objeto)
    constructor(parametro1, parametro2) {
        this.propriedade1 = parametro1;
        this.propriedade2 = parametro2;
    }
}
```

### Métodos

São funções que pertencem à classe e podem ser chamadas em seus objetos.

Para criar métodos, você deve criar dentro da estrutura da classe:

```js
class NomeDaClasse {
    // Construtor (inicializa o objeto)
    constructor(parametro1, parametro2) {
        this.propriedade1 = parametro1;
        this.propriedade2 = parametro2;
    }

    // Métodos (funções associadas à classe)
    metodo() {
        // Código do método
    }
}
```

### Métodos Estáticos

É um método que pertence à classe em si, e não às instâncias (objetos) da classe. Isso significa que você pode chamar um método estático diretamente na classe, sem precisar criar um objeto a partir dela.

De certo modo, caso o método não use informações do objeto, usamos o `static`.

```js
class NomeDaClasse {
    static nomeDoMetodo() {
        // Código do método
    }
}
```

```js
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

// Chamando o método estático diretamente na classe
console.log(Matematica.soma(2, 3)); // Saída: 5
```

### Herança

A herança permite que uma classe (chamada de classe filha ou subclasse) herde propriedades e métodos de outra classe (chamada de classe pai ou superclasse). Isso promove a reutilização de código e a organização do programa.

```js
// Classe Pai
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descricao() {
        console.log(`Este é um ${this.marca} ${this.modelo}.`);
    }
}

// Classe Filha
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo); // Chama o construtor da classe pai
        this.portas = portas;
    }

    // Sobrescreve o método descricao
    descricao() {
        console.log(`Este é um ${this.marca} ${this.modelo} com ${this.portas} portas.`);
    }

    // Novo método específico da classe filha
    buzinar() {
        console.log("Biiiiiiii!");
    }
}

// Criando um objeto da classe filha
const carro1 = new Carro("Toyota", "Corolla", 4);
carro1.descricao(); // Saída: "Este é um Toyota Corolla com 4 portas."
carro1.buzinar();   // Saída: "Biiiiiiii!"
```

**`extends:`** Indica que a ClasseFilha herda da ClassePai.

**`super:`** Usado na classe filha para chamar o construtor ou métodos da classe pai.

**`new:`** Cria um objeto a partir de uma classe ou função, permitindo que você use as propriedades e métodos definidos nela.

## Selecionando elementos do DOM

JavaScript oferece vários métodos para selecionar elementos do DOM. Os principais são:

1. **`document.getElementById():`**

* Seleciona um elemento pelo seu ID.

* Retorna um único elemento (ou null se não encontrar).

2. **`document.getElementsByClassName():`**

* Seleciona elementos pelo nome da classe.

* Retorna uma HTMLCollection (lista de elementos).

3. **`document.getElementsByTagName():`**

* Seleciona elementos pelo nome da tag (por exemplo, div, p, a).

* Retorna uma HTMLCollection.

4. **`document.querySelector():`**

* Seleciona o primeiro elemento que corresponde a um seletor CSS.

* Retorna um único elemento (ou null se não encontrar).

5. **`document.querySelectorAll():`**

* Seleciona todos os elementos que correspondem a um seletor CSS.

* Retorna uma NodeList (lista de elementos).

```js
// Selecionando elementos
const container = document.getElementById("container");
const textos = document.getElementsByClassName("texto");
const paragrafos = document.getElementsByTagName("p");
const primeiroParagrafo = document.querySelector(".texto");
const todosParagrafos = document.querySelectorAll(".texto");

// Exibindo no console
console.log(container);
console.log(textos);
console.log(paragrafos);
console.log(primeiroParagrafo);
console.log(todosParagrafos);

// Iterando sobre uma NodeList
todosParagrafos.forEach((paragrafo) => {
    console.log(paragrafo.textContent);
});
```

## Manipulando Elementos do DOM

```js
// Seleciona o container
const container = document.getElementById("container");

// Altera o conteúdo do container
container.innerHTML = "<p>Novo conteúdo adicionado!</p>";

// Seleciona o primeiro parágrafo
const primeiroParagrafo = document.querySelector(".texto");

// Altera o texto do parágrafo
primeiroParagrafo.textContent = "Texto alterado!";

// Altera o estilo do parágrafo
primeiroParagrafo.style.color = "blue";
primeiroParagrafo.style.fontSize = "20px";

// Adiciona uma classe ao parágrafo
primeiroParagrafo.classList.add("destaque");

// Cria um novo parágrafo
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um novo parágrafo.";

// Adiciona o novo parágrafo ao container
container.appendChild(novoParagrafo);

// Remove o primeiro parágrafo
container.removeChild(primeiroParagrafo);
```

## Eventos

```js
formulario.addEventListener("submit", function(evento) {
    // Código a ser executado quando o formulário for enviado
    evento.preventDefault(); // Evita o envio padrão do formulário
});
```

* **`formulario:`** O elemento do formulário que você deseja escutar.

* **`submit:`** O tipo de evento que estamos escutando.

* **`evento:`** O objeto de evento que contém informações sobre o envio.

* **`evento.preventDefault():`** Impede o comportamento padrão do formulário (recarregar a página).

## Assíncrono

### O que é um código assíncrono 

Permite que certas operações sejam executadas em segundo plano, sem bloquear a execução do restante do código. Isso é útil para tarefas que demoram um tempo para serem concluídas, como:

✔️ Fazer requisições a APIs

✔️ Ler ou escrever arquivos

✔️ Aguardar um tempo antes de executar algo

✔️ Acessar bancos de dados

Há 3 maneiras de lidar com esse tipo de código:

* Callbacks
* Promises
* Async/Await

### Callback

É uma função passada como argumento para outra função, para ser executada depois que essa função principal terminar sua tarefa.

```js
function saudacao(nome, callback) {
    console.log("Olá, " + nome);
    callback(); // Chama a função passada como argumento
}

function despedida() {
    console.log("Até logo!");
}

saudacao("Carlos", despedida);

```

📝 Saída no console:

```
Olá, Carlos
Até logo!
```

✔️ Aqui, **`despedida()`** é um callback que só é chamado depois da saudação.


### setTimeout()

É uma função assíncrona que permite agendar a execução de um código após um tempo específico.

```js
setTimeout(() => {
    console.log("Esta mensagem será exibida após 2 segundos.");
}, 2000);
```

### setTimeout em código assíncrono

```js
function esperarMensagem(callback) {
    setTimeout(() => {
        console.log("Mensagem carregada!");
        callback();
    }, 2000);
}

esperarMensagem(() => {
    console.log("Agora podemos continuar.");
});

```

📝 Saída:

```js
// (2 segundos depois...)
Mensagem carregada!
Agora podemos continuar.

```

✔️ O callback só roda depois do setTimeout.