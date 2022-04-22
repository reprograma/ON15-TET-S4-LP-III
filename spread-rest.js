// SPREAD

function imprimir(numero1, numero2, numero3) { 
    return console.log(numero1, numero2, numero3)
}
let numeros = [2, 3, 5]

imprimir(...numeros)
imprimir(2, 3, 5)

let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho']
let novissimasCompras = [...compras]

// console.log(novissimasCompras)

let dados1 = {nome: 'Jéssica', cidade: 'Recife'}
let dados2 = {idade: 19, signo: 'Peixes'}

let dados = { ...dados1, ...dados2 }
console.log(dados)

// const aluna = {
//     nome: "Adriana",
//     cidade: "Aju"
// }
// aluna.cidade = "Aracaju"
// console.log(aluna)

console.log('-------------------------------------')

// REST

function imprimirSoma(...argumentos) {
    return console.log(...argumentos);
}

console.log(imprimirSoma('Adriana', 'Bruna', 'Alita'));