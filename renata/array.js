
/*2. Arrays
Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas com a lista, como laço através da lista e fazer a mesma coisa para cada valor. (MDN)
*/


// Métodos = AÇões

let nome = "Lilit";

let aluna = {
    nome: "Brena",
}

let alunas = ["Adriana", "Amitair", "Ana Elisa"]

console.log(alunas[0])
console.log(alunas.length)


let listaDeValores =- new Array()

console.log(listaDeValores)

let signos = Array.of('Aquario', 'Sagitário', 'Leão')

console.log(signos)

// String também é um objeto
// split = dividir uma string 
// Exemplo = "Lilit".split("") - dentro do argumento você passa onde quer quebrar a string

// let alfabeto = "abcdefghijklmnopqrstuvwxyz"
 let alfabeto = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");  //já transforma a string em um array

// let arrayAlfabeto = alfabeto.split('');

console.log(alfabeto)
// console.log(arrayAlfabeto)
// console.log(arrayAlfabeto.length)
// console.log(arrayAlfabeto[5])

const cursos = "frontend backend".split(" ");
console.log(cursos);
