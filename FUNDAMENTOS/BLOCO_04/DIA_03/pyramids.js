// EXERCÍCIO 1
let n = 11;

if (n > 1) {
    for (let i = 0; i < n; i+=1) {
        console.log('*'.repeat(n));
    }
}

// EXERCÍCIO 2
if (n > 1) {
    for (let i = 1; i < n + 1; i+=1) {
        console.log('*'.repeat(i))
    }
}

// EXERCÍCIO 3
// if (n > 1) {
//     for (let i = 1; i < n + 1; i+=1) {
//         console.log(' '.repeat(n - i) + '*'.repeat(i))
//     }
// }

// EXERCÍCIO 4
// if (n % 2 == 1) {
//     let j = (n - 1) / 2;
//     for (let i = 1; i < n + 1; i += 2) {
//         console.log(' '.repeat(j) + '*'.repeat(i));
//         j-=1;
//     }
// }

// NÚMERO PRIMO
// let divisable = [];
// for (let i = 1; i <= n; i+=1) {
//     if (n % i == 0) {
//         divisable.push(i);
//     }
// }
// let checkHandler = 0;
// if(divisable.length == 2){
//     for (let i = 0; i < 2; i += 1) {
//         if (divisable[i] == 1 || divisable[i] == n) {
//             checkHandler += 1;
//         }  
//     }
// }

// if (checkHandler == 2) {
//     console.log('número primo')
// } else {
//     console.log('número não primo')
// }