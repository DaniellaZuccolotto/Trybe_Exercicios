document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'green'
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode);
console.log(document.querySelector('#primeiroFilhoDoFilho'));
document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Daniella :D'
console.log(document.querySelector('#pai #primeiroFilho'));
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild.nextElementSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling)
console.log(document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling)

let pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
let newBrother = document.createElement('section');
console.log(newBrother);
pai.appendChild(newBrother);

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let newChild = document.createElement('ul');
console.log(newChild);

let primeiroFilho = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
let newChild2 = document.createElement('ol');
console.log(newChild2);
newChild2.className = 'filhoDoFilho';
console.log(newChild2);
console.log(document.querySelector('.filhoDoFilho'));