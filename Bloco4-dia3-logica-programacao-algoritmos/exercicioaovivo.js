// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let soma = 0;

// for (let index = 1; index < 51; index += 1){
//     soma += index;
// }
// console.log('A soma total de 1 a 50 é: ' + soma); 


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let qtdaTotal = 0;

//  for (let index = 2; index <= 150; index += 1){
//   if (index % 3 === 0){
//         qtdaTotal += 1;
//    }
// }
//  console.log(qtdaTotal);
//  if (qtdaTotal === 50);{
//     console.log('Achou!');
// }



// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let player1 = 'pedra';
// let player2 = 'tesoura';

// if (player1 === player2){
//    console.log('A Ties');
// } else if (player1=== 'pedra' && player2 === 'tesoura' || player1 === 'papel' && player2 === 'pedra' || player1 === 'tesoura' && player2 === 'papel'){
//    console.log('Player 1 won');
// } else {
//    console.log('Player 2 won');
// }



//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idade = 30;
// let maiorIdade = idade + (idade > 18 ? ' anos: A pessoa é maior de idade' : ' anos: A pessoa é menor de idade');
// console.log(maiorIdade);


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let pessoas = ['Carol', 'Murilo', 'Baêta']
let idadePessoas = [28, 20, 23]
let menorIdade = idadePessoas[0];
let pessoa = '';

for (let index = 0; index < idadePessoas.length; index += 1){
   if (menorIdade > idadePessoas[index]){
      menorIdade = idadePessoas[index] 
      pessoa = pessoas[index];
   }
}
console.log (pessoa + ' é a mais nova.');