const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acumulador, name) => acumulador + name.split('').reduce((soma, letra) => letra === 'a' || letra === 'A' ? soma + 1 : soma, 0), 0)
}

console.log(containsA());

