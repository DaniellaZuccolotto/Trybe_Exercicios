const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// exercicio 1

const generationDamage = (max, min) => Math.floor(Math.random()*(max - min + 1) + min); // material consultado: https://stackoverflow.com/questions/62981108/how-does-math-floormath-random-max-min-1-min-work-in-javascript

const dragonDemage = () => {
  const lifeMax = dragon.strength;
  return generationDamage(lifeMax, 15);  
}


// exercicio 2

const warriorDamage = () => {
  const lifeMin = warrior.strength;
  const lifeMax = warrior.strength * warrior.weaponDmg;
  return generationDamage(lifeMin, lifeMax);
}


const compareMana = (mana) => mana >= 15;

const mageDamage = () => {
  const lifeMin = mage.intelligence;
  const lifeMax = mage.intelligence * 2;
  let mana = mage.mana;
  if (compareMana(mana) === true) {
    mage.mana = mana - 15;
    const obj = {
      dano: generationDamage(lifeMin, lifeMax),
      manaGasta: 15,
    };
    return obj; 
  } const obj = {
    dano: "Não possui mana suficiente",
    manaGasta: 0,
  };
  return obj;
}

const gameActions = {
  warriorTurno: (func) => {
    const demage = func();
    const lifeDragon = dragon.healthPoints;
    dragon.healthPoints = lifeDragon - demage;
    warrior.damage = demage;
  },
  mageTurno: (func) => {
    const demage = func().dano;
    const lifeDragon = dragon.healthPoints;
    dragon.healthPoints = lifeDragon - demage;
    mage.damage = demage;
  },
  dragonTurno: (func) => {
    const demage = func();
    const lifeWarrior = warrior.healthPoints;
    const lifeMage = mage.healthPoints;
    dragon.damage = demage;
    warrior.healthPoints = lifeWarrior - demage;
    mage.healthPoints = lifeMage - demage;
  },
  turnoResults: () => battleMembers, 
};

gameActions.warriorTurno(warriorDamage);
gameActions.mageTurno(mageDamage);
gameActions.dragonTurno(dragonDemage);

console.log(gameActions.turnoResults());