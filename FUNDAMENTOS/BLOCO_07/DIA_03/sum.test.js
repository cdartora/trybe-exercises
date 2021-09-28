const sum = require('./sum');

test('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(sum.sum(4,5)).toBe(9);
})

test('Teste se o retorno de sum(0, 0) é 0', () => {
  expect(sum.sum(0,0)).toBe(0);
})

test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => sum.sum(4,'5')).toThrow('parameters must be numbers');
})

test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
  expect(sum.myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
})

test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  expect(sum.myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
})

test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect(sum.myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
})