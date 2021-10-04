function handleEmployee(name) {
  const splitName = name.toLowerCase().split(' ');
  let email = `${splitName[0]}_${splitName[1]}@trybe.com`;
  return {
    nomeCompleto: name,
    'email': email,
  }
}

const newEmployees = () => {
  const employees = {
    id1: handleEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: handleEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: handleEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

const check = (num, lucky) => {
  (num == lucky) ? console.log('Parabéns você ganhou') : console.log('Tente novamente');
}

const sorteio = (num, func) => {
  const lucky = Math.floor(Math.random() * 5 + 1);
  func(num, lucky);
}

sorteio(2, check);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const counter = (gabarito, respostas) => {
  let counter = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] == respostas[i]) {
      counter += 1;
    } else if (respostas[i] == 'N.A') {
      
    } else {
      counter -= 0.5;
    }
  }
  return counter;
}

const gabarito = (gabarito, respostas, func) => {
  console.log(func(gabarito,respostas));
}

gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, counter);