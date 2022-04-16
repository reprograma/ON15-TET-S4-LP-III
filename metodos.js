const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
const alunas = ['dayane', 'renata', 'amanda', 'Brenda', 'aline']

// Métodos de array:

// console.log("Lilit " + "Bandeira") -> como concatena uma string
const arrayConcatenada = numeros.concat([1, 4, 65], 3, 'café', { nome: "Lilit"})
// console.log(arrayConcatenada)
// console.log(numeros)

const adicionaNoFinal = numeros.push(7, 9, 3)
// console.log(adicionaNoFinal)
// console.log(numeros)

console.log('-----------------------------------------------------------')

const removeUltimo = numeros.pop()
// console.log(removeUltimo)
// console.log(numeros)

console.log('-----------------------------------------------------------')

const removePrimeiro = numeros.shift()
// console.log(removePrimeiro)
// console.log(numeros)

console.log('-----------------------------------------------------------')

const adicionaNoInicio = numeros.unshift(8, 4, 6)
// console.log(adicionaNoInicio)
// console.log(numeros)

console.log('-----------------------------------------------------------')

const copiaParte = numeros.slice(2, 5) // primeiro parametro é o inicio da copia - segundo é o limite da cópia
// console.log(copiaParte)
// console.log(numeros)

console.log('-----------------------------------------------------------')

const removeEAdiciona = numeros.splice(2, 0, 123, 53, 65, 23) // primeiro parametro é o inicio da remoção, segundo é a quantidade a ser removida 
// console.log(removeEAdiciona)
console.log(numeros)

console.log('-----------------------------------------------------------')

const localizaElemento = numeros.indexOf(65)
// console.log(localizaElemento)

console.log('-----------------------------------------------------------')

const verificaSeExiste = numeros.includes(53)
// console.log(verificaSeExiste)

let alfabeto = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'w', 'v', 'x',
    'y', 'z']

let nome = ['L', 'i', 'l', 'i', 't']

const transformaEmString = nome.join("")
console.log(transformaEmString)



// Métodos de iteração de array:

const encontrarElemento = alunas.find((elemento) => elemento.toLowerCase() == "brenda")
// console.log(encontrarElemento)

const filtrarPor = numeros.filter((elemento) => elemento == 3)
// console.log(filtrarPor)

const executarTodos = numeros.map(elemento => elemento * 2)
// console.log(executarTodos)

// const verTodos = numeros.forEach(elemento => console.log(`o dobro de ${elemento} é ${elemento * 2}`))
// console.log(verTodos)

const somarTodos = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)
// console.log(somarTodos)