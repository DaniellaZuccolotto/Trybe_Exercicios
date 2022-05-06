const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const upCaser = (string) => string.toUpperCase();
// console.log(upCaser('Daniella'));
const firstLetter = (string) => string[0];
console.log(firstLetter('Daniella'));

const stringConcat = (str1, str2) => str1 + str2;
console.log(stringConcat('Daniella', 'Zuccolotto'));

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { retornaNumeroAleatorio, upCaser, stringConcat, firstLetter, fetchDog };