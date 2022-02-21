function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 
    24, 25, 26, 27, 28, 29, 30, 31];

function addTags(tag, caminho, classe){
    let elemento = document.createElement(tag)
    caminho.appendChild(elemento);
    elemento.id = classe;
    console.log(elemento);
}
addTags('ul', document.querySelector('.week-days-container'), 'days');

function addTags2(tag, caminho){
    for (let index = 0; index < dezDaysList.length; index += 1){
        let days = dezDaysList[index];
        let elemento = document.createElement(tag);
        elemento.className = 'day';
        elemento.innerHTML = days;
        caminho.appendChild(elemento);
        if (days === 24 || days === 31){
            elemento.className += ' holiday'; // tirei do site https://backefront.com.br/adicionar-classe-js-puro/
            elemento.innerHTML = days;
        }
        else if (days === 4 || days === 11 || days === 18){
            elemento.className += ' friday';
            elemento.innerHTML = days;
        }
        else if (days === 25){
            elemento.className += ' holiday friday';
            elemento.innerHTML = days;
        }
    }

}
addTags2('li', document.querySelector('#days'));

// exercicio 2

function button(tag, string, caminho, id){ // a funcao com os parametros
    let elemento = document.createElement(tag); // criei o elemnto que sera criado conforme a tag
    caminho.appendChild(elemento); // adiciona o novo elemento dentro do caminho q eu quero como pai
    elemento.innerHTML = string; // adicionei texto a esse elemento
    elemento.id = id; // adicionei classe a esse elemento
}

// console.log(document.querySelector('.buttons-container'));
button('button', 'Feriados', document.querySelector('.buttons-container'), 'btn-holiday');

// exercicio 3

// let feriado = document.querySelector('#btn-holiday');

// feriado.addEventListener('click', function(event){
//     let holiday = document.querySelectorAll('.day.holiday'); // tirei do site https://qastack.com.br/programming/1041344/how-can-i-select-an-element-with-multiple-classes-in-jquery#:~:text=Voc%C3%AA%20pode%20usar%20o%20getElementsByClassName()%20m%C3%A9todo%20para%20o%20que%20deseja.&text=Esta%20%C3%A9%20a%20solu%C3%A7%C3%A3o%20mais%20r%C3%A1pida%20tamb%C3%A9m.
//     for (let index = 0; index < holiday.length; index += 1){
//         holiday[index].style.backgroundColor = 'yellow';        
//     }
//     feriado.addEventListener('click', function(){
//         for (let index = 0; index < holiday.length; index += 1){
//             holiday[index].style.backgroundColor = 'rgb(238,238,238)';        
//         }
//     })
//     return
// })
function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'yellow';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();

// exercicio 4

addTags('button', document.querySelector('.buttons-container'), 'btn-friday');
let newButton = document.querySelector('#btn-friday');
// console.log(newButton);
newButton.innerHTML = 'Friday';

// // exercicio 5

function buttonFriday() {
    let buttonFday = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let newArray = [4, 11, 18, 25];
    buttonFday.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1){
            if (fridays[index].innerHTML != 'Sextouuu!' ){
              fridays[index].innerHTML = 'Sextouuu!';
            } else {
              fridays[index].innerHTML = newArray[index];
            }
              
        }
    })
}
buttonFriday();

// }
// newButton.addEventListener('click', function(){
//     let friday = document.querySelectorAll('.day.friday');
//     let newArray = [4, 11, 18];
//     // console.log(friday);
//     for (let index = 0; index < friday.length; index += 1){
//         friday[index].innerHTML = 'Sextouuu!';       
//     }
//     let vinteCinco = document.querySelectorAll('.day.holiday')[1];
//     // console.log(vinteCinco);
//     vinteCinco.innerHTML = 'Sextouuu!';
//     newButton.addEventListener('click', function(){
//         for (let index = 0; index < friday.length; index += 1){
//             friday[index].innerHTML = newArray[index];        
//         }
//         vinteCinco.innerHTML = '25'
//     })
// })

// exercicio 6

function daysZoom() {
    let lista = document.querySelectorAll('.day');
    for (let index = 0; index < lista.length; index += 1){
        let li = document.querySelectorAll('.day')[index];
        li.addEventListener('mousemove', function() {
            li.style.fontSize = '40px'
        });
        li.addEventListener('mouseleave', function() {
            li.style.fontSize = '20px'
        });
    } 
}
daysZoom();

// let days = document.querySelector('#days');

// function dayMouseOver() {
//   let days = document.querySelector('#days');

//   days.addEventListener('mouseover', function(event) {
//     event.target.style.fontSize = '30px';
//     event.target.style.fontWeight = '600';
//   })
// };

// function dayMouseOut() {
//   let days = document.querySelector('#days');

//   days.addEventListener('mouseout', function(event) {
//     event.target.style.fontWeight = '200';
//     event.target.style.fontSize = '20px';
//   })
// };

// dayMouseOver();
// dayMouseOut();

// exercicio 7

console.log(document.querySelector('.my-tasks'));

function addTarefa(tag, caminho, string){
  let elemento = document.createElement(tag)
  caminho.appendChild(elemento);
  elemento.innerHTML = string;
}
addTarefa('span', document.querySelector('.my-tasks'), 'Cozinhar');

// exercicio 8

function addLegenda(tag, classe, cor){
  let elemento = document.createElement(tag);
  let caminho = document.querySelector('.my-tasks');
  caminho.appendChild(elemento);
  elemento.style.backgroundColor = cor;
  elemento.className = classe;
}
addLegenda('div', 'task', 'pink');

// function newTaskDiv(color) {

//   let tasksContainer = document.querySelector('.my-tasks');
//   let newTask = document.createElement('div');

//   newTask.className = 'task';
//   newTask.style.backgroundColor = color;
//   tasksContainer.appendChild(newTask);
// };

// newTaskDiv('green');

// exercicio 9

function taskSelect(){
  let listTaskSelected = document.getElementsByClassName('task selected');
  let caminho = document.querySelector('.task');
  caminho.addEventListener('click', function(evento) {
    if (listTaskSelected.length === 0) {
      evento.target.className = 'task selected'; // adicionar a classe tech no evento que pegou o click
    } else {
      evento.target.className = 'task';
    };
  })
};
taskSelect();

// function setTaskClass() {
//   let selectedTask = document.getElementsByClassName('task selected');
//   let myTasks = document.querySelector('.task');

//   myTasks.addEventListener('click', function(event) {
//     if (selectedTask.length === 0) {
//       event.target.className = 'task selected';
//     } else {
//       event.target.className = 'task';
//     }
//   });
// };

// setTaskClass();

function backgroundTask(){
  let caminho = document.querySelector('#days');
  console.log(caminho);
  let choiceDay = document.querySelectorAll('.day')
  caminho.addEventListener('click', function(event){
    for(let index = 0; index < choiceDay.length; index += 1) {
      if(caminho[index].style.backgroundColor === 'rgb(119,119,119)'){
        event.target.style.backgroundColor = 'gray'
      } else {
        event.target.style.backgroundColor = 'rgb(119,119,119)'
      }
    }
  })
}
backgroundTask();