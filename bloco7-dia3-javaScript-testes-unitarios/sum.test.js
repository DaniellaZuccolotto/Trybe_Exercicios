const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum');

describe('exercicio 1', () => {
  it('a soma de 4 + 5 o resultado é: 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('a soma de 0 + 0 o resultado é: 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('a soma de 4 + "5" o resultado é erro', () => {
    expect(() => sum(4, '5')).toThrow();
  })
  it('se a mensagem de erro é: parameters must be numbers', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })

});

describe('exercicio 2', () => {
  it('remove o 3 do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('se removendo o valor 3 o array não será igual a:[1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('se removendo o valor 5 o array será igual a:[1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('exercicio 3', () => {
  it('se num divido por 3 e 5 retorna: fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })
  it('se num igual 9 divido por 3 retorna: fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  })
  it('se num igual 10 divido por 5 retorna: buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  })
  it('se num igual 2 nao é divido por 3 e 5 retorna: 2', () => {
    expect(myFizzBuzz(2)).toBe(2);
  })
  it('se num recebe "a" diferente de number retorna: false', () => {
    expect(myFizzBuzz('a')).toBeFalsy;
  })
});

describe('exercicio 4', () => {
  it('encode e decode são funcoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('espera que Daniella retorne: D1n32ll1', () => {
    expect(encode('Daniella')).toMatch('D1n32ll1');
  })
  it('espera que D1n32ll1 retorne Daniella', () => {
    expect(decode('D1n32ll1')).toMatch('Daniella');
  })
  it('espera que b retorne b', () => {
    expect(encode('b')).toMatch('b');
    expect(decode('b')).toMatch('b');
  })
  it('espera que o número de letras Daniella seja igual ao numero de letras D1n32ll1', () => {
    const funcaoEncode = 'Daniella';
    const funcaoDecode = 'D1n32ll1'
    expect(encode('Daniella').length).toBe(funcaoEncode.length);
    expect(decode('D1n32ll1').length).toBe(funcaoDecode.length);
  })
})