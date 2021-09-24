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