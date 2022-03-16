// escreva greet abaixo

const greet = (name = 'usuário', saudacao = 'Hi') => `${saudacao} ${name}` 

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Oi')) // 'Oi Isabela'