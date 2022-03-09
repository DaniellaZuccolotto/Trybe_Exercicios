function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


const encode = (string) => {
  let msg = string.split('');
  msg = string.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4)
    .replaceAll('u', 5);
  return msg;
}

const decode = (string) => {
  let msg = string.split('');
  msg = string.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return msg;
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};