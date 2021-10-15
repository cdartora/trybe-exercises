//  fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread . 

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'manga', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['calda de chocolate', 'm&m', 'guaraná'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const recipe = [...fruit, ...additional];
  return recipe;
};

console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [ola, func] = saudacoes;
func(ola);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];


const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));