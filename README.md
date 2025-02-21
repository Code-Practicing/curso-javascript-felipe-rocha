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