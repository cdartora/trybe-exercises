const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamageHandler = (dragon) => {
  // gera um número aleatório de 1 a 15
  let random = Math.floor(Math.random() * 15 + 1);

  // soma o número aleatório com o atributo strength
  let damage = dragon.strength + random;

  // retorna o dano
  return damage;
}

// lógica retirada do stack overflow para gerar aleatoriedade entre dois números
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const warriorDamageHandler = (warrior) => {
  // define os números para buscar a aleatoriedade do dano
  let damage = (warrior.strength * warrior.weaponDmg) - warrior.strength;

  // número aleatório entre damage
  let random = Math.floor((Math.random() * damage + 1) + warrior.strength);

  // retorna o dano
  return random
}

const mageDamageHandler = (mage) => {
  // checagem de mana
  if ((mage.mana - 15) < 0) {
    return 'Não possuí mana o suficiente';
  }

  // define o alcance da aleatoriedade
  let damage = (mage.intelligence * 2) - mage.intelligence;

  // aleatoriza o dano
  let random = Math.floor((Math.random() * damage + 1) + mage.intelligence);

  // retorna objeto com dano e mana gasta
  return {
    'damage': random,
    'mana': 15,
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warrior: (warriorDamageHandler) => {
    // dano do turno
    warriorDamage = warriorDamageHandler(warrior);

    // atualiza o atributo damage
    warrior.damage = warriorDamage;

    // atualiza vida do dragão
    dragon.healthPoints -= warriorDamage;
  },
  mage: (mageDamageHandler) => {
    // dano do turno
    mageDamage = mageDamageHandler(mage);

    // atualiza o atributo damage e mana
    mage.damage = mageDamage.damage;
    mage.mana -= mageDamage.mana;

    // atualiza a vida do dragão
    dragon.healthPoints -= mageDamage.damage;
  },
  dragon: (dragonDamageHandler) => {
    // dano do turno
    dragonDamage = dragonDamageHandler(dragon);

    // atualiza o atributo damage
    dragon.damage = dragonDamage;

    // atualiza vida dos heróis
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },
};

// um turno do jogo onde todos os batallhadores fazem ação
gameActions.warrior(warriorDamageHandler);
gameActions.mage(mageDamageHandler);
gameActions.dragon(dragonDamageHandler);
console.log(battleMembers);