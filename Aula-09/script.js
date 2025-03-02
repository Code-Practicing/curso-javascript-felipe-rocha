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