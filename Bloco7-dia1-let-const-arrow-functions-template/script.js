// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);


// const sortOddsAndEvens = () => {
//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//   let num = oddsAndEvens.sort((a, b) => a - b);
//   return num;
// }

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


// const fatorial = (numero) => {
//   let element = 1;
//   for (let index = numero; index > 0; index -= 1) {
//     element *= index;    
//   }
//   return element;
// }
// console.log(fatorial(4));

// const longestWord = (string) => {
//   let word = string.split(' ');
//   let maiorPalavra = '';
//   for (let index = 0; index < word.length; index += 1) {
//     if (word[index].split('').length > maiorPalavra.split('').length) {
//       maiorPalavra = word[index];
//     }    
//   }
//   return maiorPalavra;
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

const skills = ['ES6', 'Arrow', 'Var', 'Let', 'Const'];

function exercicio4(string) {
  const trocarString = (string) => `Tryber ${string} aqui!`
  let newString = `${trocarString(string)} Minhas cinco principais habilidades são:`;
  skills.forEach((skills, index) => 
  newString = `${newString} 
  ${skills}`)
  newString = `${newString} #gotrybe`; 
  return newString
}

console.log(exercicio4('Daniella'));