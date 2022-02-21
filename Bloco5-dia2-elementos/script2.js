// Função para add as tags(elementos) onde o parâmetro 'elemento' é oq voce quer criar e o
// paramentro 'caminho' é o caminho de acesso onde se quer criar a tag.

function addTags(elemento, caminho){
    let newText = document.createElement(elemento);
    caminho.appendChild(newText);
    console.log(elemento);
    return 
}
addTags('h1', document.body);
// // console.log(document.body);
// console.log(addTagsBody('h1', document.body));

// Função para adicionar texto nas tags(elementos) criadas, onde o parâmetro 'texto' é oq voce quer 
// escrever dentro da tag e o paramentro 'caminho' é o caminho de acesso para inserir o texto na tag.

function addTexto(texto, caminho){
    caminho.innerHTML = texto;
    return
}
addTexto('Exercício 5.2 - JavaScript DOM', document.body.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.nextElementSibling); // caminho do h1.

addTags('main', document.body); // criei main

// Função para adicionar classes nas tags(elementos) criadas, onde o parâmetro 'classe' é o nome
// da classe e o paramentro 'caminho' é o caminho de acesso para inserir a classe na tag.

function addClass(classe, caminho){
    caminho.className = classe;
    return
}
addClass('main-content', document.body.firstElementChild.nextElementSibling.nextElementSibling); // criei classe em main
console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling); // achei o caminho do main

addTags('section', document.body.firstElementChild.nextElementSibling.nextElementSibling); // criei section

console.log(document.body.childNodes[3].firstElementChild); // achei o caminho do meu section
addClass('center-content', document.body.childNodes[3].firstElementChild); // add classe em section

console.log(document.querySelector('.center-content')); // achei o caminho do meu section com class
addTags('p', document.querySelector('.center-content')); // criei p dentro de section

console.log(document.querySelector('.center-content p')); // achei o caminho de 'p'
addTexto('Criando funções usando create e achando caminhos', document.querySelector('.center-content p'));

// exercicio 5
addTags('section', document.body.firstElementChild.nextElementSibling.nextElementSibling); // criei uma nova section em main
console.log(document.body.childNodes[3].childNodes[1]); // achei o caminho da nova section
addClass('left-content', document.body.childNodes[3].childNodes[1]); // coloquei classe na nova section

// exercicio 6
addTags('section', document.body.firstElementChild.nextElementSibling.nextElementSibling); // criei uma nova section em main

// exercicio 7
console.log(document.body.childNodes[3].childNodes[2]); // achei o caminho da nova section
addClass('small-image', document.body.childNodes[3].childNodes[1]);

//// Função para adicionar imagem nas tags(elementos) criadas, onde o parâmetro 'url' é da onde tirou
// a imagem e o paramentro 'caminho' é o caminho de acesso para inserir a imagem na tag.

// https://cursos.alura.com.br/forum/topico-inserir-imagem-dentro-do-javascript-89494 - onde eu pesquisei 
// para saber como colocar img em js.
function addImage(url, caminho) {
    let img = document.createElement("img");
    img.src=url;
    caminho.appendChild(img);
}
addImage('https://picsum.photos/200', document.body.childNodes[3].childNodes[1]);


// exercicio 8
addTags('ul', document.body.childNodes[3].childNodes[2]); // criei a lista
console.log(document.body.childNodes[3].childNodes[2].firstChild); // caminho da lista
for (let index = 0; index < 10; index += 1){
    addTags('li', document.body.childNodes[3].childNodes[2].firstChild);
    // console.log(document.body.childNodes[3].childNodes[2].firstChild.childNodes[index]);
    addTexto((index + 1), document.body.childNodes[3].childNodes[2].firstChild.childNodes[index]);
}
// exercicio 9
addTags('h3', document.body.firstElementChild.nextElementSibling.nextElementSibling); // criei os h3
addTags('h3', document.body.firstElementChild.nextElementSibling.nextElementSibling);
addTags('h3', document.body.firstElementChild.nextElementSibling.nextElementSibling);
console.log(document.body.childNodes[3].childNodes[3]); // achi o caminho das h3
addTexto('Titulo h3 numero 1', document.body.childNodes[3].childNodes[3]); // adicionei texto nos h3
addTexto('Titulo h3 numero 2', document.body.childNodes[3].childNodes[4]);
addTexto('Titulo h3 numero 3', document.body.childNodes[3].childNodes[5]);

// exercicio 1.2
addClass('title', document.body.firstElementChild.nextElementSibling); // adicionei classe a h1

// exercicio 2.2
addClass('description', document.body.childNodes[3].childNodes[3]);
addClass('description', document.body.childNodes[3].childNodes[4]);
addClass('description', document.body.childNodes[3].childNodes[5]);

//exercicio 3.2

//// Função para remover as tags(elementos) criadas, onde o parâmetro 'caminho1' é do pai desse elemnto
// e o paramentro 'caminho2' é o caminho de acesso do elemento.

function removeAlgo(caminho1, caminho2) {
    caminho1.removeChild(caminho2);
    return
}
removeAlgo(document.body.firstElementChild.nextElementSibling.nextElementSibling, document.body.childNodes[3].childNodes[1]);

console.log(document.body.childNodes[3].childNodes[1]);
addClass('right-content', document.body.childNodes[3].childNodes[1]);

document.querySelector('.right-content').style.marginRight = 'auto';

document.querySelector('.center-content').style.backgroundColor = 'green';

// exercicio 6.2
console.log(document.querySelector('.right-content').firstChild); // caminho da lista
console.log(document.querySelector('.right-content').firstChild.childNodes[8]); // caminho da li nove
console.log(document.querySelector('.right-content').firstChild.childNodes[9]); // caminho da li dez;

removeAlgo(document.querySelector('.right-content').firstChild, document.querySelector('.right-content').firstChild.childNodes[9]);
removeAlgo(document.querySelector('.right-content').firstChild, document.querySelector('.right-content').firstChild.childNodes[8]);