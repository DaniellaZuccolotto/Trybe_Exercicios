// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function checkBox(event) {
  event.preventDefault();
  event.key = 'a';
}
HREF_LINK.addEventListener('click', checkBox);
INPUT_CHECKBOX.addEventListener('click', checkBox);
INPUT_TEXT.addEventListener('keypress', checkBox);