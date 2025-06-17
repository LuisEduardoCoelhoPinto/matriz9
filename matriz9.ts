let matriz = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
    matriz[i] = [];
    for (let j = 0; j < 6; j++) {
        let input = prompt(`Elemento [${i}][${j}]:`);
        matriz[i][j] = parseInt(input);
    }
}

// Soma das colunas pares
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j += 2) {
        soma += matriz[i][j];
    }
}

console.log(`Soma das colunas pares: ${soma}`);