function generatePhoneNumber(array) {
  let contNumber = 0;
  let resultado = '';
  let numero = 0;
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  } 
  for (let index in array) {
    let verificaNumber = array[index];
    for (let index2 in array) {
      if (array[index2] === verificaNumber) {
        contNumber += 1;
      }
    }
    if (array[index] < 0 || array[index] > 9 || contNumber >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contNumber = 0;
  }
  resultado = '(' + array[0] + array[1] + ') ';
  for (let index3 = 2; index3 <= 6; index3 += 1){
    resultado += array[index3];
  }
  resultado += '-';
  for (let index4 = 7; index4 < array.length; index4 += 1){
    resultado += array[index4];
  }
  return resultado;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, -4, 7, 8, 9, 0, 1]));
