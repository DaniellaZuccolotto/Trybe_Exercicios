const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const creatKey = (lesson, key, value) => {
  lesson[key] = value;
}

creatKey(lesson2, 'turno', 'noite');

// const showKey = (obj) => {
//   console.log(Object.keys(obj));
// }

// showKey(lesson3);

// const showLength = (obj) => {
//   let lista = Object.keys(obj);
//   console.log(lista.length);
// }

// showLength(lesson3);

// const showValues = (obj) => {
//   console.log(Object.values(obj));
// }

// showValues(lesson3);

// const allLessons = {};

// Object.assign(allLessons, {lesson1, lesson2, lesson3});
// // console.log(allLessons);

// const numberStudents = () => {
//   let total = 0;
//   const students = Object.keys(allLessons);
//   for (index in students){
//     total += allLessons[students[index]].numeroEstudantes;
//   }
//   return total;
// };
// console.log(numberStudents()); 

const getValue = (obj, position) => Object.values(obj)[position];
console.log(getValue(lesson1, 0));

