// exercicio 1

let valor1 = 20;
let valor2 = 13;

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;
let modulo = valor1 % valor2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);


// exercicio 2

const num1 = 120;
const num2 = 110;
if (num1 > num2){
    console.log(num1);
}
else{
    console.log(num2);
}

// exercicio 3


const num3 = 72;
if (num1 > num2 && num1 > num3){
    console.log(num1);
}
else if (num2 > num1 && num2 > num3){
    console.log(num2);
}
else{
    console.log(num3);
}

// exercicio 4

const num4 = -5;

if (num4 > 0){
    console.log('positivo');
}
else if (num4 < 0){
    console.log('negativo');
}
else{
    console.log('zero');
}


// exercicio 5

const angulo1 = -50;
const angulo2 = 60;
const angulo3 = 45;

if (angulo1 + angulo2 + angulo3 === 180){
    console.log('true');
}
else if (angulo1 + angulo2 + angulo3 != 180){

    if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0)
        console.log('false');
    else{
        console.log('erro');
    }
}

// exercicio 6

let peca1= 'CAVALO';
let peca = peca1.toLowerCase();


if (peca === 'bispo'){
    console.log('linha reta diagonalmente')
}
else if (peca === 'peao'){
    console.log('movem somente para frente, uma casa por vez')
}
else if (peca === 'torre'){
    console.log('linha reta horizontalmente e verticalmente pelo número de casas não ocupadas')
}
else if (peca === 'cavalo'){
    console.log('O movimento do cavalo forma um “L"')
}
else if (peca === 'rainha'){
    console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente')
}
else if (peca === 'rei'){
    console.log('pode se mover para qualquer casa adjacente')
}
else{
    console.log('erro')
}


// exercicio 7

let nota = 65;

if (nota >= 90){
    console.log('Nota A')
}
else if (nota >= 80 && nota < 90){
    console.log('Nota B')
}

else if (nota >= 70 && nota < 80){
    console.log('Nota C')
}
else if (nota >= 60 && nota < 70){
    console.log('Nota D')
}
else if (nota >= 50 && nota < 60){
    console.log('Nota E')
}
else if (nota > 50){
    console.log('Nota F')
}
else {
    console.log('erro')
}

// exercicio 8

const number1 = 5;
const number2 = 31;
const number3 = 53;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0){
    console.log('True');
}
else {
    console.log('False');
}

// exercicio 9

const number4 = 6;
const number5 = 30;
const number6 = 51;

if (number4 % 2 != 0 || number5 % 2 != 0 || number6 % 2 != 0){
    console.log('True');
}
else {
    console.log('False');
}

// exercicio 10

const custo = 100;
const venda = 150;

const custoTotal = custo * 1.2;
const lucro = venda - custoTotal;

if (custo > 0 && venda > 0){
    console.log(lucro * 1000);

}
else{
    console.log('erro')
}

// exercicio 11

let salario = 3000;
let salariodescontoINSS;

if (salario < 1556.94){
    salariodescontoINSS = salario * 0,92;
}
else if (salario > 1556.95 && salario < 2594.92){
    salariodescontoINSS = salario * 0,91;
}
else if (salario > 2594.93 && salario < 5189.82){
    salariodescontoINSS = salario * 0.89;
}
else if (salario > 5189.82){
    salariodescontoINSS = salario - 570.88;
}

let salariodescontoIR;

if (salariodescontoINSS < 1903.98){
    salariodescontoIR = salariodescontoINSS 
}
else if (salariodescontoINSS > 1903.99 && salariodescontoINSS < 2826.65){
    salariodescontoIR = salariodescontoINSS - ( ( salariodescontoINSS * 0.075 ) - 142.8);
}
else if (salariodescontoINSS > 2826.66 && salariodescontoINSS < 3751.05){
    salariodescontoIR = salariodescontoINSS - ( ( salariodescontoINSS * 0.15 ) - 354.8);
}
else if (salariodescontoINSS > 3751.06 && salariodescontoINSS < 4664.68){
    salariodescontoIR = salariodescontoINSS - ( ( salariodescontoINSS * 0.225 ) - 636.13);
}
else if (salariodescontoINSS > 4664.69){
    salariodescontoIR = salariodescontoINSS - ( ( salariodescontoINSS * 0.275 ) - 869.36);
}

console.log('Salario Liquido R$:', salariodescontoIR);