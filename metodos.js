//metodos vinculados ao objeto array

const letras = ["a", "b", "f", "g", "t", "r"];

//find() > encontrar o primeiro elemento pedido dentro da array e paran

const encontrarPrimeiro = letras.find((elemento) => elemento == "g")
console.log(encontrarPrimeiro)

//filter > forma uma array de elementos repetidos

const numeros = [2, 4, 5, 9, 5, 1, 2, 6];
console.log(numeros.filter((elemento) => elemento == 1))

//map > executa em cada elemento uma função

console.log(numeros.map((elemento) => elemento *10))

//for each > mostra todos os elementos

console.log(numeros.forEach((elemento) => console.log(`o dobro de ${elemento} é ${elemento *2}`)))

//reduce > reduz a array a um único valor de retorno

console.log(numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual))

//concat > junta coisas novas na array e retorna uma nova array

console.log(numeros.concat(1))

//push > adiciona um ou mais elementos ao final da array e retorna um novo comprimento/lenght

console.log(numeros.push(70, 80, 90))
console.log(numeros)

//pop > retira o último elemento e retorna o elemento retirado
console.log(numeros.pop())
console.log(numeros)

//shift > retira o primeiro elemento e retorna o elemento retirado
console.log(numeros.shift())
console.log(numeros)

//unshift > adicionar um ou mais elementos no início da array e retorna o novo comprimento/lenght
console.log(numeros.unshift(2, 4, 8))
console.log(numeros)

//slice > retorna uma cópia de uma parte específica da array recortando pelo indice
console.log(numeros.slice(5,9)) //primeiro parametro é o inicio da copia e o segundo é o limite
console.log(numeros)

//splice > remove antigos e adiciona novos elementos, retorna os elementos que foram cortados
console.log(numeros.splice(2,0, 70)) //primeiro parametro é o inicio da remoção e o segundo é a quantidade
console.log(numeros)

//indexOf > localiza o elemento pelo indice e retorna esse indice
console.log(numeros.indexOf(70))

//includes > determina se a array contem um elemento, retornando true ou false
console.log(numeros.includes(80))
console.log(numeros)

//join > junta todos os elementos de uma array em uma string e retorna essa string
console.log(numeros.join("-"))