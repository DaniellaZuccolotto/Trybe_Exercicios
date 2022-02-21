let numero = 0;
let maiorPrimo = 0;

for (let index = 1; index <= 100; index += 1){
    numero = index;
    if (numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0){
        if (numero > maiorPrimo){
            maiorPrimo = numero;
        }
    }
}
console.log(maiorPrimo);