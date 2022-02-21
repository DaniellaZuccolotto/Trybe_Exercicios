let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        console.log(array);
        let position = array[index];
        console.log(array);
        array[index] = array[secondIndex];
        console.log(array);
        array[secondIndex] = position;
        console.log(array);
        console.log('acabou')
      }
      else {
          console.log ('nao muda');
      }
    }
  }