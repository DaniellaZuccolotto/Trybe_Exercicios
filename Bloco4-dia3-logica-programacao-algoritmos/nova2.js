let resultado = 0;
let maiorPrimo = 0;

for (let index = 1; index < 50; index += 1){
    resultado = index;
    if (resultado % 2 != 0 && resultado % 3 != 0 && resultado % 5 != 0 && resultado % 7 != 0){
        if (resultado > maiorPrimo){
            maiorPrimo = resultado;
        }
    }
}
console.log(maiorPrimo);
