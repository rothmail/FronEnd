let image = document.querySelector('#image-pokemon');

let form = document.querySelector('#form');
let input = document.querySelector('#input');

let id = document.querySelector('#id');
let nome = document.querySelector('#nome');

let tipo1 = document.querySelector('#tipo-01');
let tipo2 = document.querySelector('#tipo-02');

let habilidade = document.querySelector('#habilidade');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura')

let audio = document.querySelector('#audio');

let numero = 1;

const fetchP = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchP(pokemon);
    image.src = dataPokemon.sprites.front_default;

    nome.innerHTML = dataPokemon.name;
    id.innerHTML = dataPokemon.id;

    tipo1.innerHTML = dataPokemon.types[0].type.name;
    tipo2.innerHTML = dataPokemon.types[1].type.name;

    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    peso.innerHTML = parseInt(dataPokemon.weight / 10) + 'kg';
    altura.innerHTML = ((dataPokemon.height / 10).toFixed(1)) + 'm';

    audio.src = dataPokemon.cries[0].legacy;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
})

showPokemon(numero);

let next = document.querySelector('#btn-next');
let back = document.querySelector('#btn-back');

next.addEventListener('click', (event) => {
    if (numero < 1000) {
        numero = numero + 1;
    }
    showPokemon(numero);
})

back.addEventListener('click', (event) => {
    if (numero > 1) {
        numero = numero - 1;
    }
    showPokemon(numero);
})