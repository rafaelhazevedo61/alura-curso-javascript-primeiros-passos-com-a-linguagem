console.log(`Trabalhando com listas`)

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15;
console.log("Destinos possíveis")
console.log(listaDeDestinos)

if(idadeComprador > 20){
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1) // (a partir da posicao x,deletar x elementos), removendo item
} else {
    console.log("Comprador menor de idade")
}

console.log(listaDeDestinos)

// == < comparação
// =  < atribuição