# ON15-TodasEmTech-S4-Lógica de Programação-III

Esta é a 4ª semana da turma online Todas em Tech on15 - Back-end, nesta aula do dia 16/04/2022 teremos os seguintes conteúdos:

- Revisão de objetos;
- Arrays;
- Métodos de Arrays;
- Spread/rest;

## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpg' width=500 alt='print da imagem da cämera da durante aula de revisão do dia 13/04/22 onde Lilit tem seus cabelos cacheados longos presos em coque no topo da cabeça, usa blusa bege de gola alta e sem mangas, o fundo está é predominantemente verde e com efeito blur'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente em São Paulo, Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

#### Contatos

- E-mail: devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/tsuyuAsui.jpg' width=500 alt='personagem Tsuyu Asui do anime boku no hero, ela tem cabelos pretos longos e soltos e usa um õculos estilo aviador na testa, olhos pretos, e tem a lingua para fora tocando a ponta do dedo indicador direito, veste um macacão verde colado ao corpo com equipamentos de super heroína, ao fundo o várias plantas e sapinhos'>

### Quem são as alunas?

<img src='./assets/tenshiMuyo.jpg' width=500 alt=' 6 personagens de Tenshi Muyo em plano médio todas com express"ao de espanto'>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;

## Plano de aula

### 1. Revisão de Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). (MDN) Os objetos são formados por chave e valor

#### 1.1. Criando um objeto:

```js

const professora = new Object()
  professora.nome = "Lilit"
  professora.sobrenome = "Bandeira"
  professora.cidade = "São Paulo"

const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Lemos" },
  idade: 20,
  cidade: "São Paulo",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),

};
```

#### 1.2. Acessando o valor de uma propriedade ou método de objetos usando:

##### 1.2.1. Notação de ponto - Digitando o ponto, podemos acessar todos as propriedades e métodos encapsuladas dentro do objeto

```js
console.log(aluna.nome.primeiro);
aluna.saudacao();
```

##### 1.2.2. Notação de cochetes - Usamos as chaves (como strings) para acessar o valor de um item

```js
console.log(aluna["nome"]["primeiro"]);
console.log(aluna["idade"]);
console.log(aluna["interesses"][0]);
```

#### 1.3. Desestruturando um objeto:

```js
const { idade, saudacao } = aluna;
```

#### 1.4. Objeto Date e seus métodos;

- Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC). (MDN)

- O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. (MDN) Argumentos locales e options

```js
const hoje = new Date();

console.log(hoje); // 2022-04-16T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 16/04/2022 🤔

const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // 16/04/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga); // sábado, 16 de abril de 2022
```

### 2. Arrays

- Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas com a lista, como laço através da lista e fazer a mesma coisa para cada valor. _(MDN)_

#### 2.1 Criando uma array

```js
const tipos = ["String", "Números", "Booleanos"];
const cidades = new Array("Recife", "São Paulo", "Manaus");
const cursos = "frontend backend".split(" ");
const tecnologias = Array.of("HTML", "CSS", "JS");
```

#### 2.2. Acessando o valor de um elemento da array

```js
console.log(alunas[1]);
```

#### 2.3. Desestruturando uma array

```js
const [primeiro, segundo] = tipos;
console.log(primeiro);
console.log(segundo);
```

---

### 3. Métodos de Arrays

- #### array para exemplos:

  ```js
  const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
  ```

- `find()`

  ```js
  const encontrarPrimeiro = numeros.find((element) => element == 2);
  console.log(encontrarPrimeiro); // retorno 2
  ```

- `filter()`

  ```js
  const filtrarPor = numeros.filter((element) => element == 3);
  console.log(filtrarPor); // retorno [3, 3, 3]
  ```

- `map()`

  ```js
  const executarTodos = numeros.map((element) => (element = 4));
  console.log(executarTodos); // retorn  [4, 4, 4, 4, 4, 4, 4, 4, 4]
  ```

- `forEach()`

  ```js
  const verTodos = numeros.forEach((element) => console.log(element));
  console.log(verTodos); // retorno  3\n2\n4\n3\n5\n1\n3\n4\n2
  ```

- `reduce()` -> O método reduce() uma callback que será executada para cada elemento da array, resultando num único valor de retorno, esta callback pode receber alguns parâmetros, sendo os mais comuns o `acumulador` e o `valorAtual`

  ```js
  const ReduzirPara = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(ReduzirPara); // retorno 27
  ```

- `concat()` -> retorna um novo array contendo todos os arrays ou valores passados como parâmetro. _(MDN)_

  ```js
  const arrayConcatenada = numeros.concat(1, [2, 3], "café");
  console.log(arrayConcatenada); // retorno [3, 2, 4, 3, 5, 1, 3, 4, 2, 1, 4, 5, 2, 'café']
  ```

- `push():` -> adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. _(MDN)_

  ```js
  const adicionaNoFinal = numeros.push(2, 3);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `pop():` -> remove o último elemento de um array e retorna aquele elemento. _(MDN)_

  ```js
  const removeUltimo = numeros.pop();
  console.log(removeUltimo); // retorno 2
  ```

- `shift()` -> remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. _(MDN)_

  ```js
  const removePrimeiro = numeros.shift();
  console.log(removeUltimo); // retorno 3
  ```

- `unshift()` -> adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado. _(MDN)_

  ```js
  const adicionaNoInicio = numeros.unshift(4, 1);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `slice()` -> retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado. _(MDN)_

  ```js
  const copiaParte = numeros.slice(2, 5);
  console.log(copiaParte); //retorno [4, 3, 5]
  ```

- `splice()` -> altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. _(MDN)_

  ```js
  const removeEAdiciona = numeros.splice(2, 2, "novo");
  console.log(removeEAdiciona); //retorno [4, 3] -> removidos
  console.log(numeros); // retorno [3, 2, 'novo', 5, 1, 3, 4, 2]
  ```

- `indexOf()` -> retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. _(MDN)_

  ```js
  const localizaElemento = numeros.indexOf(2);
  console.log(localizaElemento); // retorno 1
  ```

- `includes()` -> determina se um array contém um determinado elemento, retornando true ou false apropriadamente. _(MDN)_

  ```js
  const verificaSeExiste = numeros.includes(4);
  console.log(localizaElemento); // true
  ```

- `join()` -> junta todos os elementos de um array em uma string e retorna esta string. _(MDN)_

  ```js
  const transformaString = numeros.join("-");
  console.log(transformaString); // retorno "3, 2, 4, 3, 5, 1, 3, 4, 2"
  ```

### 4. Spread/rest

#### 4.1. Spread syntax

- Sintaxe de Espalhamento permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados. _(MDN)_

##### 4.1.1. Exemplos de aplicações

```js

function imprimir(x, y, z) { 
    return console.log(x, y, z)
}
let argumentos = [2, 3, 5]

espalhar(...argumentos)


let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho']
let novissimasCompras = [...compras]

let aluna1 = {nome: 'Jéssica', cidade: 'Recife'}
let aluna2 = {nome: 'Gabriela', cidade: 'São Paulo'}

let alunas = { ...aluna1, ...aluna2 }

```

#### 4.2. Rest Parameters

- A sintaxe rest se parece exatamente como a sintaxe de espalhamento, mas esta é usada para desestruturar arrays e objetos. De certa forma, a sintaxe rest é o oposto da sintaxe de espalhamento: A sintaxe de espalhamento (spread) 'expande' um array em vários elementos, enquanto a sintaxe rest coleta multiplos elementos e 'condensa' eles em um único elemento. _(MDN)_

##### 4.2.1. Exemplos de aplicações

```js

function imprimirSoma(...argumentos) {
    return argumentos.reduce((previous, current) => previous + current);
}

imprimirSoma(2, 5, 4, 3);
imprimirSoma(1, 8, 4, 5, 6);

```

### 5. Desafio da Semana

#### 5.1. Refaça o exercício da semana passada trocando o método utilizado para um que utiliza pelo menos 3 dos métodos aprendidos na aula de hoje! Nesta semana incluir a a data e hora da compra faz parte do retorno esperado para a entrega do exercício;

#### 5.2. Crie uma aplicação simples que faça uma busca no nosso banco de dados fake (let data) pelo nome do filme (retorno único) ou gênero (retorno em lista) fornecido pela cliente, enviar como resposta para cada filme encontrado um objeto com título, gênero e ano de lançamento;

```js 
let data = [
  {
    titulo: "us",
    genero: "terror",
    ano: "2019", 
  },
  {
    titulo: "transformers: O Lado Oculto da Lua",
    genero: ["ação", "sci-fi"],
    ano: "2011", 
  },
  {
    titulo: "moonfall - ameaça lunar",
    genero: ['Aventura', "sci-fi"],
    ano: "2022", 
  },
  {
    titulo: "casa gucci",
    genero: "drama",
    ano: "2021", 
  },
  {
    titulo: "encanto",
    genero: ["animação", "musical"],
    ano: "2021", 
  },
  {
    titulo: "Demon Slayer - Mugen Train",
    genero: ["ação", "fantasia"],
    ano: "2019", 
  },
  {
    titulo: "O Último Suspiro",
    genero: ["drama", "sci-fi"],
    ano: "2019", 
  },
  {
    titulo: "Suspiria",
    genero: "terror",
    ano: "1977", 
  },
  {
    titulo: "Corpo Elétrico",
    genero: ["drama", "ficção"],
    ano: "2017", 
  },
  {
    titulo: "Amour",
    genero: ["drama", "romance"],
    ano: "2012", 
  },
  {
    titulo: "Ninho de Musaranho",
    genero: "terror",
    ano: "2014", 
  },
  {
    titulo: "Colonia",
    genero: "suspense",
    ano: "2015", 
  },
  {
    titulo: "Homem-Aranha: Sem Volta para Casa",
    genero: ["ação", "aventura"],
    ano: "2021", 
  }]

  busca cliente1 = "Suspense";
  busca cliente2 = "Corpo Elétrico"
  busca cliente3 = "Homem-Aranha: Sem Volta para Casa"
  busca cliente4 = "sci-fi" 
  busca cliente5 = "romance"

```


### 6. Referëncias
