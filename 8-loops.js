console.log(`\n Trabalhando com listas`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador < listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe")
    } else{
        console.log("Destino não existe")
    }
    contador += 1;
}


