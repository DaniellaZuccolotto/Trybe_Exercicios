const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// para fixar

const wakeUp = () => console.log(`Acordando!!`);
const cofee = () => console.log(`Bora tomar café!!`);
const sleep = () => console.log(`Partiu dormir!!`);

const doingThings = (func) => func();

doingThings(wakeUp);