let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCÍCIO 1
// for (let number of numbers) {
//     console.log(number);
// }

// EXERCÍCIO 2
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

// EXERCÍCIO 3
// let sum = 0;
// for (let number of numbers) {
//     sum += number;    
// }
// console.log(sum/numbers.length);

// EXERCÍCIO 4
// let sum = 0;
// for (let number of numbers) {
//     sum += number;    
// }
// if ((sum/numbers.length) > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor que 20");
// }

// EXERCÍCIO 5
// let higher = 0;
// for (let i = 0; i < numbers.length; i+=1) {
//     if (numbers[i] > higher) {
//         higher = numbers[i];
//     }
// }
// console.log(higher);

// EXERCÍCIO 6
// let odd = 0;
// for (let number of numbers) {
//     if (number % 2 == 1) {
//         odd += 1;
//     }
// }
// if (odd > 0) {
//     console.log("Existem " + odd + " Números ímpares.")
// } else {
//     console.log("Nenhum valor ímpar encontrado.");
// }

// EXERCÍCIO 7
// let lower = numbers[0];
// for (let i = 0; i < numbers.length; i+=1) {
//     if (numbers[i] < lower) {
//         lower = numbers[i];
//     }
// }
// console.log(lower);

// EXERCÍCIO 8
// let arr = [];
// for (let i = 1; i < 26; i += 1) {
//     arr.push(i)
// }
// console.log(arr);

// EXERCÍCIO 9
// let arr = [];
// for (let i = 1; i < 26; i += 1) {
//     arr.push(i)
// }

// let dividedArr = [];
// for (let i = 0; i < arr.length; i += 1) {
//     dividedArr.push(arr[i]/2);
// }
// console.log(dividedArr);