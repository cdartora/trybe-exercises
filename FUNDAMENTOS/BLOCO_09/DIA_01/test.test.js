// testes assíncronos

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// exercício
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase test to equal TEST', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toEqual('TEST');
      done();
    } catch(error) {
      done(error);
    }
  });
});