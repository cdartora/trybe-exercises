// [x] Modifique a estrutura da função para que ela seja uma arrow function .
// [x] Modifique as concatenações para template literals .

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Faça uma função que retorne os array em ordem crescente com template literal

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados em ordem crescente!`);

// faça uma função que retorne o fatorial de um número

const factorial = num => {
  let result = num * (num - 1);
  for (let i = num - 2; i >= 1; i -= 1) {
    result *= i; 
  }
  console.log(result);
}

factorial(5);

// crie uma função que retorne a maior frase

const longestWord = sentence => {
  let words = sentence.split(' ');
  let biggest = '';
  for(let i = 0; i < words.length; i+= 1) {
    if (words[i].length > biggest.length) {
      biggest = words[i];
    }
  }
  console.log(biggest);
}

longestWord('i loove go to the park');

// exercicio 4

const skills = ['HTML', 'css', 'flexbox', 'javascript', 'bootstrap'];

const stringMan = word => `Tryber ${word} aqui`;

console.log(`${stringMan('Carlos')}! Minhas 5 principais habilidades são: ${skills}.`);