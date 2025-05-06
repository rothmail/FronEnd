alert('Hello World!');

let titulo = document.querySelector('#titulo');
titulo.textContent = 'New Text';
titulo.style.color = 'blueviolet';

function mostraAlerta(){
    alert('New Alert');
}

function mostraTexto(texto){
    alert(texto);
}

mostraTexto('Text showed here');