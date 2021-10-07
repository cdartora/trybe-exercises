const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, curr) => {
  let counter = 0;
  for (let char of curr) {
    char.toLowerCase() === 'a' ? counter += 1 : counter = counter;
  }
  return acc + counter;
}, 0);

console.log(containsA);