const a = 5;
const b = 10;
const c = 15;

let adição = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let módulo = a % b;

console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(módulo);

// faça um programa que retorne o maior de dois números.
console.log("Maior número:")

if (a > b) {
    console.log(a);
}
else if (b > a) {
    console.log(b);
}

// faça um programa que retorne o maior de três números
console.log("Maior número:")

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c > a && c > b) {
    console.log(c);
}

// faça um programa que retorne positivo, negativo ou zero
console.log("Positivo ou negativo:")

if (a > 0) {
    console.log("Positivo");
}
else if (a < 0) {
    console.log("Negativo");
}
else if (a = 0) {
    console.log("Zero");
}

// faça um programa que calcula se um tringulo é possível
console.log("Triangulo:")

if (a + b + c == 280) {
    console.log("Triangulo válido!");
}
else if (!(a + b + c == 280)) {
    console.log("Erro!");
}

// faça um programa que retorna os movimentos de uma peça de xadrez
console.log("Xadrez:")

const chess = "BISHOP"

if (chess.toLowerCase() == 'pawn') {
    console.log("one square forward")
}
else if (chess.toLowerCase() == 'horse') {
    console.log("L");
}
else if (chess.toLowerCase() == 'tower') {
    console.log("x or y axis");
}
else if (chess.toLowerCase() == 'bishop') {
    console.log("diagonals");
}
else if (chess.toLowerCase() == 'king') {
    console.log("one square to every possible way");
}
else if (chess.toLowerCase() == 'queen') {
    console.log("x or y axis or diagonals");
}

// faça um programa que converta notas em letras
console.log("Notas:");

const nota = -25;

if (nota > 100 || nota < 0) {
    console.log("Erro");
}
else if (nota >= 90) {
    console.log("A");
}
else if (nota >= 80) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >= 60) {
    console.log("D");
}
else if (nota >= 50) {
    console.log("E");
}
else if (nota < 50) {
    console.log("F");
}

// Faça um programa que retorne true se tiver um par
console.log("Par:");

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log("Par");
}
else {
    console.log("Não possuí par.");
}

// faça um programa que retorne true se tiver um ímpar
console.log("Ímpar:")

if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    console.log("Ímpar");
}
else {
    console.log("Não possui ímpar.");
}

// Faça um programa que calcule o lucro
console.log("Lucro:")

const custo = 10;
const valorDeVenda = 30;

const lucro = 1000 * (valorDeVenda - (custo * 20 / 100));

console.log("lucro de 1000 vendas: " + lucro);

// faça um programa que calcule o valor a ser descontado pelo INSS e o IR
console.log("INSS e IR:")

let salario = 3000;

if (salario < 1556.94) {
    salario = salario - (salario * 8 / 100);
}
else if (salario >= 1556.94 && salario < 2564.92) {
    salario = salario - (salario * 9 / 100);
}
else if (salario >= 2594.93 && salario < 5189.82) {
    salario = salario - (salario * 11 / 100);
}
else if (salario >= 5189.82) {
    salario = salario - (salario - 570.88);
}

if (salario < 1903.98) {
    salario = salario;
}
else if (salario >= 1903.99 && salario <= 2826.65) {
    salario = salario - ((salario * 7.5 / 100) - 142.80);
}
else if (salario > 2826.65 && salario <= 3751.05) {
    salario = salario - ((salario * 15 / 100) -354.80);
}
else if (salario > 3751.06 && salario <= 4664.68) {
    salario = salario - ((salario * 22.5 / 100) - 636.13);
}
else if (salario > 4664.68) {
    salario = salario - ((salario * 27.5 / 100) - 869.36);
}

console.log(salario)