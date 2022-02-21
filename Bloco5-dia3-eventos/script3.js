//Munição para o exercício 🔥🔥🔥🔥🔥🔥



//Função com nome

// function digaOla(nome){
//   console.log("Olá " + nome);
// }
// digaOla('carol');


//Função anônima
// element.addEventListener("click", function (){
//   console.log("Olá" + nome);
// })



//Evento do click do botão 
//element.addEventListener(“qual o evento”, função)

// let input = document.querySelector('#inputValue');

// input.addEventListener('input', function(event) {
//   const techElement = document.querySelector('.techElement');
//   console.log(event.target.value);
//   techElement.innerText = event.target.value;
// });

//Evento do onload 
//Garantir que uma determinada ação  seja executada após a página ser totalmente carregada

// function getElement(){
//   console.log('teste');
// }

// window.onload = function () {
//  getElement();
// }

//Gerar números aleatórios
//Math.random() * númeroMáximo;


//1. Recuperar o elemento (botão)
//3. Pegar os carros e fazer terem movimento
let btnCar = document.querySelector('#start-race-btn');
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
car1.style.marginLeft = '0';
car2.style.marginLeft = '0';


//2. Adicionar um evento no botão


btnCar.addEventListener("click", function (){
  let inputValue = document.querySelector('#inputValue').value;

  
  car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * inputValue + 'px';

  car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * inputValue + 'px';

  // console.log(car1.style.marginLeft = '10px' + 10);


  if(parseInt(car1.style.marginLeft) > window.innerWidth){
    console.log('teste');
    alert("Ferrari ganhou");
    car1.style.marginLeft = '0';
    car2.style.marginLeft = '0';
    inputValue.innerText = '';

  }else if (parseInt(car2.style.marginLeft) > window.innerWidth){
    alert("Mercedes ganhpu!!!!!!!");
    car1.style.marginLeft = '0';
    car2.style.marginLeft = '0';
    inputValue.innerText = '';
  }
})

// limite da tela

// final do carrinho


//Exercicio


//Para casa 🏘️🏘️🏘️🏘️🏘️
//Refatore a linha 59 e 60, 64 e 65 para quando resetar os valores, ser a partir de uma função






//Converter string e pegar números
//parserInt('20px') = 20;