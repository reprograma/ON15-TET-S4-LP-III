const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2]
const alunas = ['dayane', 'renata', 'amanda', 'brenda', 'aline']

// find - encontrar

const encontrarElemento = alunas.find((elemento) => elemento.toLowerCase() == "brenda")
// console.log(encontrarElemento)

const filtrarPor = numeros.filter((elemento) => elemento == 3)
// console.log(filtrarPor)

const verTodos = numeros.forEach(elemento => console.log(`o dobro de ${elemento} é ${elemento * 2}`))
const somarComForEach = numeros.forEach(elemento => {
    let acumulador = 0
    acumulador += elemento
    return console.log(acumulador)
})



console.log(verTodos)

const somarTodos = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)

console.log(numeros)