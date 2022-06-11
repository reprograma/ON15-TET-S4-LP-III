// Operadores



// Spread - sintaxe de Espalhamento permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados. (MDN)

function imprimir(x, y, z) { 
    return console.log(x, y, z)
}
let argumentos = [2, 3, 5]

imprimir(...argumentos)


let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho', ...compras] //pega os elementos em si e joga em outro lugar
let novissimasCompras = [...compras] // copia o array não modifica a array anterior



// Se tiver as mesmas propriedades, o valor da nova propriedade será o valor da antiga, ele irá substituir o valor da antiga pela nova.
let aluna1 = {nome: 'Jéssica', cidade: 'Recife'}
let aluna2 = {nome1: 'Gabriela', cidade1: 'São Paulo'}

let alunas = {...aluna1, ...aluna2 }

let dados1 = {nome: 'Jéssica', cidade: 'Recife'}
let dados2 = {idade: 20, signo: 'Aquário'}

let dados3  = {...dados1, ...dados2 }



console.log(alunas)
console.log(dados3)
console.log(novasCompras)
console.log(novissimasCompras)


// Rest Parameters - A sintaxe rest se parece exatamente como a sintaxe de espalhamento, mas esta é usada para desestruturar arrays e objetos. De certa forma, a sintaxe rest é o oposto da sintaxe de espalhamento: A sintaxe de espalhamento (spread) 'expande' um array em vários elementos, enquanto a sintaxe rest coleta multiplos elementos e 'condensa' eles em um único elemento. (MDN)
// Seria o oposto da spread


function imprimirSoma(...argumentos) {
    return argumentos.reduce((previous, current) => previous + current);
}

console.log(imprimirSoma(2, 5, 4, 3));
console.log(imprimirSoma(1, 8, 4, 5, 6));

var nomes = ["Franscisco", "Jéssica", "Gabriela", "Joao"]
for(var i=0; i< nomes.length; i++){
    if(nomes[i].length > 5){
    console.log(nomes[i]);
}
}