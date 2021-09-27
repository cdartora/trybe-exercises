// escreva uma função que receba um objeto um chave e um valor e adicione a propriedade ao objeto

const addPropertie = (obj, key, value) => {
  obj[key] = value;
}

const customer = {
  nome: 'carlos',
  estado: 'casado',
  aniversario: '12/5/2001'
}

addPropertie(customer, 'profissao', 'desempregado');

console.log(customer);

// função que retorna as habilidades de um objeto estudante

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (obj) => {
  for (let skills in obj) {
    console.log(`${skills}, Nível: ${obj[skills]}.`);
  }
}

skills(student1);
skills(student2);

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, No: ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.name}, o total do seu pedido ${order.order.pizza + order.order.drinks} é R$${order.payment.total}.`)
}

order.name = 'Carlos Dal Soler';
order.payment.total = 50;
orderModifier(order);

// parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function modifyObj (obj, key, value) {
  obj.key = value;
}

modifyObj(lesson2, 'turno', 'noite');

function listKeys (obj) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    console.log(key);
  } 
}

listKeys(lesson1);

function objLength (obj) {
  const keys = Object.keys(obj);
  console.log(keys.length); 
}

objLength(lesson3);

function listValues (obj) {
  const values = Object.values(obj);
  for (let value of values) {
    console.log(value);
  } 
}

listValues(lesson2);

const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
Object.assign(allLessons.lesson1, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
Object.assign(allLessons.lesson2, lesson1);
allLessons.lesson3 = Object.assign({}, lesson3);
Object.assign(allLessons.lesson3, lesson1);

console.log(allLessons);

function getValueByNumber (obj, num) {
  const values = Object.values(allLessons[obj]);
  console.log(values[num]);
}

getValueByNumber('lesson1', 0);

function checkPair (obj, key, value) {
  if (obj[key] == value) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkPair(lesson1, 'tufrno', 'manhã');