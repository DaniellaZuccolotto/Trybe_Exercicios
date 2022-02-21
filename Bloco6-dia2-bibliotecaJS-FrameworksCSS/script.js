const buttonEnviar = document.querySelector('#button-submit');
const inputImage = document.querySelector('#input-concordo');

function textInputValidation() {
  const email = document.querySelector('#input-email').value.length;
  const invalidEmail = email < 10 || email > 50;
  console.log(email);

  const name = document.querySelector('#input-name').value.length;
  const invalidName = name < 10 || name > 40;
  console.log(name);

  const reason = document.querySelector('#text-area').value.length;
  const invalidReason = reason > 500;
  console.log(reason);

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}


function checkInput(event) {
  const validation = textInputValidation();
  console.log(validation);
  if (inputImage.checked === false) {
    alert('Precisamos da autorizacao para uso das imagens');
    event.preventDefault();
  } else if ( validation === false) {
    alert('Dados Invalidos');
    event.preventDefault();
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
  console.log(inputImage.checked);
}

buttonEnviar.addEventListener('click', checkInput);

document.getElementById('input-data').DatePickerX.init();