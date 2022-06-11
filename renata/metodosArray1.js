// Métodos que não são de iteração - Gerais



const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

// Concat - concatena dois arrays e retorna um novo array contendo todos os arrays ou valores passados como parâmetros, não alterando os arrays originais - Idempotência
// Ele adiciona os valores de um array ao final do outro


const arrayConcatenada = numeros.concat(1, [2, 3], "café");
console.log(arrayConcatenada);


// push(): -> adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. (MDN)

console.log(numeros);
const adicionaNoFinal = numeros.push(2, 3);
console.log(adicionaNoFinal); // retorno 11 - o comprimento do array
console.log(numeros); // retorno [3, 2, 4, 3, 5, 1, 3, 4, 2, 2, 3]



// pop(): -> remove o último elemento de um array e retorna aquele elemento. Modificando a array original. (MDN)
// não precisa colocar o parâmetro, pois ele retorna o último elemento do array

const removeUltimo = numeros.pop();
console.log(removeUltimo); // retorno 2



// shift() -> remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. (MDN)
// Exemplo de utilização: fila de espera/ordem de chegada

const removePrimeiro = numeros.shift();
console.log(removeUltimo); // retorno 3
console.log(numeros); // retorno [2, 4, 3, 5, 1, 3, 4, 2]
console.log(numeros.length); // retorno 8

// unshift() -> adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado. (MDN) Modifica o array original.

const adicionaNoInicio = numeros.unshift(4, 1);
console.log(adicionaNoFinal); // retorno 11
console.log(numeros); // retorno [4, 1, 2, 4, 3, 5, 1, 3, 4, 2]


// slice() -> retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado. (MDN)
// A partir do elemento 2, copie o elemento 2,3,4 ele para e não copia o elemento 5 



const copiaParte = numeros.slice(2, 5);
console.log(copiaParte); //retorno [2,4,3]
console.log(numeros); // retorno [4, 1, 2, 4, 3, 5, 1, 3, 4, 2, 2]


// splice() -> altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. (MDN)
// A partir de qual elemento e quantos elementos serão removidos(quantidade) e qual será adicionado
// Modifica o array original
// Para passar mais de um item para o splice, basta separar por vírgula

const removeEAdiciona = numeros.splice(2, 2, "novo", "chamado");
// const removeEAdiciona = numeros.splice(2, 0, "novo"); // remove 0 elementos e adiciona novo elemento
console.log(removeEAdiciona); //retorno [2,4] -> removidos
console.log(numeros); // retorno [4, 1, 'novo', 3, 5, 1, 3, 4, 2, 2] -> adicionados



// indexOf() -> retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. (MDN)
// Parece um find()


const localizaElemento = numeros.indexOf(2);
console.log(localizaElemento); // retorno 1


// includes() -> determina se um array contém um determinado elemento, retornando true ou false apropriadamente. (MDN)

const verificaSeExiste = numeros.includes(4);
console.log(verificaSeExiste); // true


// join() -> junta todos os elementos de um array em uma string e retorna esta string. (MDN)
// Se passar o join sem parametro, ele junta os elementos como vírgula, se você quiser sem espaços passe "" juntas

const transformaString = numeros.join("-");
console.log(transformaString); // retorno "3, 2, 4, 3, 5, 1, 3, 4, 2"


// reverse() -> inverte a ordem dos elementos de um array. (MDN)
const reverte = numeros.reverse();
console.log(reverte)