const professora = new Object()
professora.nome = "Lilit"
professora.sobrenome = "Bandeira"
professora.cidade = "São Paulo"

// Objeto - coleção de dados
// Array é um tipo de objeto
// Métodos - funções que podem ser aplicadas a um objeto - causam um efeito

const aluna = {
    nome: {primeiro: "Gabriela", segundo: "Lemos"},
    _id: 123456789,
    idade: 20,
    cidade: "São Paulo",
    interesses: ["musica", "cinema", "teatro"],
    saudacao: () => Console.log("Olá meninas"),
};

// desestruturação de objetos, para poder extrair as informações que queremos.
// Notação de objeto
// ex: let {matricula, genero} = aluna
// const/let {passar os que quer extrair} = nome do objeto

let {nome, _id} = aluna;
console.log(nome);
console.log(_id);



const aluna1 = {
    "nome dela": {primeiro: "Gabriela", segundo: "Lemos"},
    idade: 20,
    "cidade": {"nascimento": "Palmas",
            viveu: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"]},
    interesses: ["musica", "cinema", "teatro"],
    saudacao: () => Console.log("Olá meninas"),
};

const teste = {
    nome: {primeiro: "Gabriela", segundo: "Lemos"},
}

// console.log(aluna["nome dela"][primeiro]) // acessando o nome da pessoa
// console.log(aluna["cidade"]["nascimento"]) // acessando a cidade de nascimento
console.log(aluna1.cidade.viveu[1])
console.log(professora)

// Objeto Date e seu métodos
// new Date - cria um molde de objeto Date
// propriedades são informaçãoes
// métodos(funções definidas ao objeto) são ações que podem ser aplicadas a um objeto. Ex: getDate(), getMonth(), getFullYear()

let hoje = new Date();

console.log(hoje)


let dia = hoje.getDate();
let mes = hoje.getMonth();
let ano = hoje.getFullYear();

console.log(dia);
console.log(mes);
console.log(ano);
console.log(`${dia}/${mes + 1 }/${ano}`);

const dataFormatada = hoje.toLocaleDateString("pt-br");
console.log(dataFormatada);

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dataLonga = hoje.toLocaleDateString("pt-BR", options);
  console.log(dataLonga); // sábado, 16 de abril de 2022