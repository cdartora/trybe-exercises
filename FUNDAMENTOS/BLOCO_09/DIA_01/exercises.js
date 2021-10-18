// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log('Returned planet: ', mars), 4000);
// };

// getPlanet();

const messageDelay = () => Math.floor(Math.random() * 5000);

const sucessRate = () => Math.floor(Math.random() * 100) > 60 ? true : false;

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback, error) => {

  const temperature = getMarsTemperature();
  if (sucessRate()) {
    callback(temperature);
    setTimeout(() => console.log(`Mars temperature is: ${temperature} degree Celsius`), messageDelay());
  } else {
    error('Falha ao conectar com Curiosity');
  };
}
// definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo