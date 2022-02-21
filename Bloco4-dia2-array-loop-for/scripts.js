let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift('Academia');

console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);


let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

// exercicio 2
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');

console.log(menu3);

// estruturas de repetição 

let numero = 5; 

for (let index = 0; index <= 10; index += 1){
    console.log(numero + 'x' + index + ': ' +  numero * index); 
}



let lista = ['Joana', 'Maruia', 'Lucas'];

for (let index2 = 0; index2 < lista.length; index2 += 1){
    console.log('Boas Vindas: ' + lista[index2]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index3 = 0; index3 < groceryList.length; index3 += 1){
    console.log('Comida: ' + groceryList[index3]);
}


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let listOfNames of names){
    console.log(listOfNames);
}