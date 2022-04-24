console.log(`\n Trabalhando com listas`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n Destinos possíveis")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < listaDeDestinos.length){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe")
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

/* for (let i = 0; index < cont <3; cont++) {
    if(listaDeDestinos[i] == destino){
        console.log("Destino existe")
        destinoExiste = true;
    }   
} */

console.log("Destino existe: ",destinoExiste)


if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
} else {
    console.log("Desculpe, tivemos um erro!")
}

