// Métodos de Array
// São métodos vinculados ao objeto Array
// Métodos de iteração - percorre o Array elemento a elemento para ter acesso aos valores 




// Métodos de iteração
const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
const alunas = ["Adriana", "Amitair", "Ana Elisa"];

// find - encontra o primeiro valor que satisfaz a condição - método

const encontrarPrimeiro =  numeros.find((elemento) => elemento == 2);
// Encontre um elemento que satisfaça a condição = elemento == 2
// não é obrigada a criar uma variável, somente se você quiser usar o valor em outro lugar


// console.log(numeros);
// console.log(encontrarPrimeiro);
// console.log(alunas.find((elemento) => elemento == "Ana Elisa"));
// console.log(numeros.filter((elemento) => elemento == 3));
// filter - filtra os elementos que satisfaçam a condição - método 




// map - ele executa uma função para cada elemento do array - método
// E retorna uma nova array preenchida com os valores retornados pela função
const executarTodos = numeros.map((element) => (element * 4));
// console.log(executarTodos); 
// console.log(numeros);




// ForEach - ele executa uma função para cada elemento do array - método
// Ele executa alguma coisa para cada elemento do array e não traz o retorno - O Retorno dele é undefined 
// const verTodos = numeros.forEach((element) => console.log(element *2));
// const verTodos1 = numeros.forEach((element) => console.log(`O dobro de ${element} é ${element * 2}`));
// console.log(verTodos1); // retorno  3\n2\n4\n3\n5\n1\n3\n4\n2


// Reduce - ele executa uma função para cada elemento do array - método
// reduce() -> O método reduce() uma callback que será executada para cada elemento da array, resultando num único valor de retorno, esta callback pode receber alguns parâmetros, sendo os mais comuns o acumulador e o valorAtual

const ReduzirPara = numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual
);
// console.log(ReduzirPara); // retorno 27

const somarTodos = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);
let acumulador = 0;
const somarComForEach = numeros.forEach(element => acumulador + element);
// console.log(somarTodos); // retorno 27
// console.log(somarComForEach); // retorno 27


// Callback - função que é passada como parâmetro para outra função
function calcular(funcaoComoArgumento){
    let numero1 = 3;
    let numero2 = 5;
    return funcaoComoArgumento(numero1, numero2);
}

function somar(num1, num2){
    return num1 + num2;
}

console.log(calcular(somar)); // retorno 8