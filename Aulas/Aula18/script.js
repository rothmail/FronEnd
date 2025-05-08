// atribuição das variáveis
let image = document.querySelector("#image-pokemon");

let form = document.querySelector("#form");
let input = document.querySelector("#input");

let id = document.querySelector("#id");
let nome = document.querySelector("#nome");

let tipo1 = document.querySelector("#tipo-01");
let tipo2 = document.querySelector("#tipo-02");

let habilidade = document.querySelector("#habilidade");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

let numero = 1;
// atribuição termina aqui

// "puxar" API
const fetchP = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIresponse.json();
  return data;
};

// mostrar atributos do pokemon com base na API
const showPokemon = async (pokemon) => {
  const dataPokemon = await fetchP(pokemon); // "data" busca a informação na API
  image.src = dataPokemon.sprites.other.showdown.front_default;

  nome.innerHTML = dataPokemon.name; // "innerHTML" faz com que mude o atributo com base na API
  id.innerHTML = dataPokemon.id;

  tipo1.innerHTML = dataPokemon.types[0].type.name;
  if (dataPokemon.types[1] != undefined) {tipo2.innerHTML = dataPokemon.types[1].type.name;} else {tipo2.innerHTML = "";}

  habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
  peso.innerHTML = (dataPokemon.weight / 10).toFixed(1) + "kg"; // "peso" e "altura" devem ser convertidos de libras para kg
  altura.innerHTML = (dataPokemon.height / 10).toFixed(1) + "m";

  const audio = new Audio(dataPokemon.cries.latest);
  audio.play();
};

// atribuição dos botões "voltar" e "próximo"
let next = document.querySelector("#btn-next");
let back = document.querySelector("#btn-back");

// condições para funcionalidade correto dos botões
form.addEventListener("submit", (event) =>{
  event.preventDefault();
  showPokemon(input.value.toLowerCase());
  numeroPokedex = input.value
})

// condições para funcionalidade correto dos botões
back.addEventListener("click", (event) =>{
  if(numeroPokedex > 1){
      numeroPokedex--
  }
  showPokemon(numeroPokedex);
})

// condições para funcionalidade correto dos botões
next.addEventListener("click", (event) =>{
  if(numeroPokedex < 1000){
      numeroPokedex++
  }
  showPokemon(numeroPokedex);
})

// pegar o valor do input e somar ++1, se estiver vazio, então atribuir valor 1 à ele