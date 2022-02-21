
if (localStorage.length > 0) {
    let backColor = localStorage.getItem('backColor');
    let textColor = localStorage.getItem('textColor');
    let textSize = localStorage.getItem('textSize');
    let textHeight = localStorage.getItem('textHeight');
    let textFont = localStorage.getItem('textFont');
    let pegarChave = document.querySelector('#body-section');
    pegarChave.style.backgroundColor = backColor;
    pegarChave.style.color = textColor;
    pegarChave.style.fontSize = textSize;
    pegarChave.style.lineHeight = textHeight;
    pegarChave.style.fontFamily = textFont;
}

function changeBackColor(id, backColor) {
    let button = document.querySelector('#button-back');
    let bodySection = document.querySelector(id);
    button.addEventListener('click', function() {
        if (bodySection.style.backgroundColor !== backColor){
            bodySection.style.backgroundColor = backColor;
            localStorage.setItem('backColor', backColor);
        } else {
            bodySection.style.backgroundColor = 'white';
            localStorage.setItem('backColor', 'white');
        }
        console.log(bodySection);        
    })
} 
changeBackColor('#body-section', 'rgb(82, 193, 236)');


function changeTextColor(id, textColor) {
    let button = document.querySelector('#button-color');
    let bodySection = document.querySelector(id);
    button.addEventListener('click', function() {
        if (bodySection.style.color !== textColor){
            bodySection.style.color = textColor;
            localStorage.setItem('textColor', textColor);
        } else {
            bodySection.style.color = 'black';
            localStorage.setItem('textColor', 'black');
        }
        console.log(bodySection);        
    })
}
changeTextColor('#body-section', 'blue');

function changeTextSize(id, size) {
    let button = document.querySelector('#button-size');
    let bodySection = document.querySelector(id);
    button.addEventListener('click', function() {
        if (bodySection.style.fontSize !== size) {
            bodySection.style.fontSize = size;
            localStorage.setItem('textSize', size);    
        } else {
            bodySection.style.fontSize = '15px'
            localStorage.setItem('textSize', '15px');   
        }
        console.log(bodySection);        
    })
}
changeTextSize('#body-section', '20px');

function changeTextMargin(id, size) {
    let button = document.querySelector('#button-height');
    let bodySection = document.querySelector(id);
    button.addEventListener('click', function() {
        if (bodySection.style.lineHeight !== size) {
            bodySection.style.lineHeight = size;
            localStorage.setItem('textHeight', size);  
        } else {
            bodySection.style.lineHeight = '18px';
            localStorage.setItem('textHeight', '18px'); 
        }
        console.log(bodySection);        
    })
}
changeTextMargin('#body-section', '25px');

function changeTextFont(id, font) {
    let button = document.querySelector('#button-font');
    let bodySection = document.querySelector(id);
    button.addEventListener('click', function() {
        if (bodySection.style.fontFamily !== font) {
            bodySection.style.fontFamily = font;
            localStorage.setItem('textFont', font);   
        } else {
            bodySection.style.fontFamily = 'Verdana';
            localStorage.setItem('textFont', 'Verdana'); 
        }      
        console.log(bodySection);        
    })
}
changeTextFont('#body-section', 'Arial');


// agora com input 

function choseBackColor(){
    let input = document.querySelector('#input-back');
    let bodySection = document.querySelector('#body-section');
    input.addEventListener('input', function(event) {
        let backColor = event.target.value;
        bodySection.style.backgroundColor = backColor;
        localStorage.setItem('backColor', backColor);
    })
    document.body.addEventListener('click', function(){ // evento de clicar em qualquer lugar da pagina
        input.value = '';  // o input vai receber o valor zero e limpar
      })
}
choseBackColor();

function choseTextColor(){
    let input = document.querySelector('#input-color');
    let bodySection = document.querySelector('#body-section');
    input.addEventListener('input', function(event) {
        let textColor = event.target.value;
        bodySection.style.color = textColor;
        localStorage.setItem('textColor', textColor);
    })
    document.body.addEventListener('click', function(){ // evento de clicar em qualquer lugar da pagina
        input.value = '';  // o input vai receber o valor zero e limpar
      })
}
choseTextColor();

function choseTextSize(){
    let input = document.querySelector('#input-size');
    let bodySection = document.querySelector('#body-section');
    input.addEventListener('input', function(event) {
        let size = event.target.value;
        bodySection.style.fontSize = size + 'px';
        localStorage.setItem('textSize', size + 'px');   
    })
    document.body.addEventListener('click', function(){ // evento de clicar em qualquer lugar da pagina
        input.value = '';  // o input vai receber o valor zero e limpar
      })
}
choseTextSize();

function choseTextHeight(){
    let input = document.querySelector('#input-height');
    let bodySection = document.querySelector('#body-section');
    input.addEventListener('input', function(event) {
        let size = event.target.value;
        bodySection.style.lineHeight = size + 'px';
        localStorage.setItem('textHeight', size + 'px'); 
    })
    document.body.addEventListener('click', function(){ // evento de clicar em qualquer lugar da pagina
        input.value = '';  // o input vai receber o valor zero e limpar
      })
}
choseTextHeight();

function choseTextFont(){
    let input = document.querySelector('#input-font');
    let bodySection = document.querySelector('#body-section');
    input.addEventListener('input', function(event) {
        let font = event.target.value;
        bodySection.style.fontFamily = font;
        localStorage.setItem('textFont', font);
    })
    document.body.addEventListener('click', function(){ // evento de clicar em qualquer lugar da pagina
        input.value = '';  // o input vai receber o valor zero e limpar
      })
}
choseTextFont();