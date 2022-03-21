const sum = (...numbers) => numbers.reduce(((soma, number) => soma + number), 0);
console.log(sum(5,2,3,4,5));