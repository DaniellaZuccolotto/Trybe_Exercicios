const service = require('./Service');
test("testar a função retornaNumeroAleatorio", () => {
  service.retornaNumeroAleatorio=jest.fn().mockReturnValue(10);
  // service.retornaNumeroAleatorio();
  expect(service.retornaNumeroAleatorio()).toBe(10); // isso é considerado uma chamada
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
});
test('mudar a implementação da função retornaNumeroAleatorio', () => {
  service.retornaNumeroAleatorio=jest.fn().mockImplementationOnce((a,b)=> a/b);
  // service.retornaNumeroAleatorio.mockImplementation((a, b) => a/b);
  expect(service.retornaNumeroAleatorio(10,2)).toBe(5);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(10,2);
})
test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros',()=>{
  service.retornaNumeroAleatorio=jest.fn().mockImplementationOnce((a,b,c)=> a*b*c);
  expect(service.retornaNumeroAleatorio(2,2,2)).toBe(8);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(2,2,2);

  service.retornaNumeroAleatorio.mockReset();
  service.retornaNumeroAleatorio=jest.fn().mockImplementationOnce((a)=> a*2);
  expect(service.retornaNumeroAleatorio(2)).toBe(4);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(2);
});
test('Crie três funções e faça as implementações',()=>{
  const upCaserFunc = jest.spyOn(service, 'upCaser').mockImplementationOnce((string)=> string.toLowerCase());
  service.firstLetter=jest.fn().mockImplementationOnce((string)=> string[string.length-1]);
  service.stringConcat=jest.fn().mockImplementationOnce((str1, str2, str3)=> str1+str2+str3);

  expect(upCaserFunc('DANIELLA')).toBe('daniella');
  expect(upCaserFunc).toHaveBeenCalled();
  expect(upCaserFunc).toHaveBeenCalledTimes(1);
  expect(upCaserFunc).toHaveBeenCalledWith('DANIELLA');
  expect(service.firstLetter('Daniella')).toBe('a');
  expect(service.firstLetter).toHaveBeenCalled();
  expect(service.firstLetter).toHaveBeenCalledTimes(1);
  expect(service.firstLetter).toHaveBeenCalledWith('Daniella');
  expect(service.stringConcat('a','b','c')).toBe('abc');
  expect(service.stringConcat).toHaveBeenCalled();
  expect(service.stringConcat).toHaveBeenCalledTimes(1);
  expect(service.stringConcat).toHaveBeenCalledWith('a','b','c');

  service.upCaser.mockRestore();
  expect(service.upCaser('Daniella')).toBe('DANIELLA');
});
test('Fetch dog', async ()=>{
  const 
});
