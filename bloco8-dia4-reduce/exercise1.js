const arrays = [
  ['1', '2', '3'],  // 0  // 0,1,2
  [true],  // 1  // 0
  [4, 5, 6],  // 2  // 0,1,2
];

function flatten() {
  return arrays.reduce((newArray, array) => newArray.concat(array));
}
console.log(flatten());