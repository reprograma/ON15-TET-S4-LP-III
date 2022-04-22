function imprimir(x, y, z){
    return console.log(x, y, z)
}
let numeros = [2, 3, 5]

imprimir(numeros[0], numeros[1], numeros[2])

//spread > pega os elementos e espalha

imprimir(...numeros)

//rest > coleta os elementos e condensa em um só
function imprimirSoma(...argumentos){
    return argumentos.reduce((previous, current) => previous + current);
}

console.log(imprimirSoma(2, 5, 4, 3))
imprimirSoma(1, 8, 4, 7, 9);