const wakeUp = () => 'Acordando!';

const coffe = () => 'Bora tomar café';

const sleep = () => 'Partiu dormir!';

const doinThings = (func) => func();

console.log(doinThings(coffe));