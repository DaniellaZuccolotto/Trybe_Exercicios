// let verseWord = '';
// function verificarPalindrome(word){
//     for (index = word.length -1 ; index >= 0; index -= 1){
//         verseWord += word[index];
//     }
//     if (verseWord === word) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(verificarPalindrome('arara'));


// function verificarPalindrome(word){
//     let verseWord = word.split('').reverse().join('');
    
//     if (verseWord === word) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(verificarPalindrome('arara'));




// exercicio 2

// function maiorValor(test){
//     let resultado = 0;
//     for (let index in test){
//         if (test[resultado] < test[index]){
//         resultado = index;
//         }
//     }
//     return resultado;
// }
// console.log (maiorValor([2, 3, 6, 7, 10, 1]));


// exercicio 3
// function menorValor(number){
//     let menorNumber = 0;
//     for (let index in number){
//         if (number[index] < number[menorNumber]){
//             menorNumber = index;
//         }
//     }
//     return menorNumber;
// }
// console.log(menorValor([2, 4, 6, 7, -10, 0, -3]));

// exercicio 4

// function qtdaCaracteres(names){
//     let maiorNome = '';
//     for (let index in names){
//         if (names[index].length > maiorNome.length){
//             maiorNome = names[index];
//         }
//     }
//     return maiorNome;
// }
// console.log(qtdaCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// exercicio 5

function numberRepeat(number){
    let contRepetido = 0;
    let contNumber = 0;
    let indexNumberRepeat = 0;
    for (let index in number){
        let verificaNumber = number[index];
        for (let index2 in number){
            if (number[index2] === verificaNumber){
                contNumber += 1;
            }
        }
        if (contNumber > contRepetido){
            contRepetido = contNumber;
            indexNumberRepeat = index;
        }
        contNumber = 0;
    }
    return number[indexNumberRepeat];
}
console.log(numberRepeat([2, 3, 2, 5, 8, 2, 3]));



// exercicio 6 

// function sumNumber(n){
//     let sum = 0;
//     for (let index = 1; index <= n; index += 1){
//         sum += index;
//     }
//     return sum;
// }
// console.log(sumNumber(20));


// exercicio 7

// function verificaFimPalavra(word, ending){
//     if (ending < word){
//         for (let index in word){
            
//         }

//     }
// }