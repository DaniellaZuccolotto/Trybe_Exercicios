// exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let listanumbers of numbers){
    console.log(listanumbers);
}

// exercicio 2

let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index];
}
console.log(soma);

// exercicio 3

let soma2 = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma2 = soma2 + numbers[index];
}
console.log(soma / numbers.length);

// exercicio 4

let soma3 = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma3 = soma3 + numbers[index];
}

if ((soma3 / numbers.length) > 20){
    console.log('valor maior que 20:');
}
else{
    console.log('valor menor ou igual a 20:');
}

// exercicio 5

let maiorNumber = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (maiorNumber < numbers[index]){
       maiorNumber = numbers[index]
    }
    else{}
}
console.log(maiorNumber)

// exercicio 6

let impar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 1){
        impar = impar += 1;
    }
    else{}
}

if (impar != 0){
    console.log(impar);
}
else {
    console.log('nenhum valor ímpar encontrado');
}

// exercicio 7

let menorNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (menorNumber > numbers[index]){
       menorNumber = numbers[index]
    }
    else{}
}
console.log(menorNumber)

// exercicio 8
let numbers2 = [];
for (let index = 1; index <= 25; index += 1){
    numbers2.push(index)
}
console.log(numbers2);

// exercicio 9

let multiploNumbers2 = [];
for (let index = 0; index < numbers2.length; index += 1){
    numbers2 = numbers2[index] / 2;
    multiploNumbers2.push(numbers2);
}
console.log(multiploNumbers2);
