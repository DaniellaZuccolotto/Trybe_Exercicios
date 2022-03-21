
// const specialFruit = ['manga', 'banana', 'maçã'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['leite condesado', 'creme de leite', 'leite em pó'];

// const fruitSalad = (fruit, additional) => {
//   return saladaDeFruta = [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const userJob = {...user, ...jobInfos};
// const {name, age, nationality, profession, squad, squadInitials} = userJob;
// console.log(userJob);
//   console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// const saudacoes = ['Olá', (saudacao) => console.log('a')];

// saudacoes[1](saudacoes[0]); // Olá

// const [fistSau, secondSau] = saudacoes;
// console.log(fistSau);

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';


// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo




const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));