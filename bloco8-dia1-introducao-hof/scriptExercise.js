// exercicio 1

// const empregados = (name) => {
//   const newempregados = {
//     nomeCompleto: name,
//     email: `${name.toLowerCase().split(' ').join('_')}@trybe.com`,
//   };
//   return newempregados;
// };

// const newEmployees = (func) => {
//   const employees = {
//     id1: func('Daniella Zuccolotto'),
//     id2: func('Amaliana Zucoloto'),
//     id3: func('Camilla Zuccolotto'),
//   };
//   return employees;
// };

// console.log(newEmployees(empregados));

// exercicio 2


// const generationNumber = () => {

//   return array;
// }

// const compare = (aposta, array) => {
//   if (aposta === array){
//     return `Parabéns você ganhou`;
//   } return `Tente novamente`;
// }


// const result = (aposta, func) => {
//   const array = [];
//   for (let index = 0; index < 5; index += 1) {
//     const number = Math.floor(Math.random() * 5 + 1);
//     array.push(number);
//   }
//   console.log(aposta, array);
//   return func(aposta, array);
// }
// console.log(result([1, 2, 3, 4, 5], compare));


const compare = (aposta, number) => aposta === number;

const result = (aposta, func) => {
  const number = Math.floor(Math.random() * 5 + 1);

  console.log(aposta, number);
  return func(aposta, number) ? `Parabéns você ganhou` : `Tente novamente`
}
console.log(result(3, compare));

// exercicio 7

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (arrayRight, arrayStudent) => {
  let count = 0;
  for (let index = 0; index < arrayRight.length; index += 1) {
    if (arrayRight[index] === arrayStudent[index]) {
      count += 1;
    } else if (arrayStudent[index] === 'N.A') {
      count += 0;
    } else count += -0.5;   
  }
  return count;
}

const result = (arrayRight, arrayStudent, func) => {
  return `Resultado final: ${func(arrayRight, arrayStudent)} pontos`;
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
