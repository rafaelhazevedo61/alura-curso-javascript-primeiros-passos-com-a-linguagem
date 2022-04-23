console.log(`Trabalhando com listas`)

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) //adicionando

console.log("Destinos possíveis")
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1) // (a partir da posicao x,deletar x elementos)
console.log(listaDeDestinos)

console.log(listaDeDestinos[1])
console.log(listaDeDestinos[1],listaDeDestinos[0])