//definindo array
let signo = Array.of('escorpião', 'libra', 'câncer')
console.log(signo)

let alfabeto = "abcdefghijklmnopqrsstuvwxyz"
//transformar string em array
let arrayAlfabeto = alfabeto.split("") //cortar a array com algum parametro para definir cada indice
console.log(arrayAlfabeto)

let curso = "front back dados ux"
//let listaDeCursos = curso.split(" ") //escolhendo o corte nos espaços
let listaDeCursos = curso.toUpperCase() //transformando em tudo maiúsculo
console.log(listaDeCursos)