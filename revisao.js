//declaração de objeto e as notações de ponto
const professora = new Object()
professora.nome = "Lilit"
professora.sobrenome = "Bandeira"
professora.cidade = "São Paulo"

//declaração de objeto em js com { chave: informações, chave: [informações]}
const aluna = {
nome: { primeiro: "Gabriela", segundo: "Lemos" },
idade: 20,
cidade: "São Paulo",
interesses: ["música", "animes"],
saudacao: () => console.log("olá meninas"),

};

console.log(aluna.interesses[0]) //acessar objeto pela notação de ponto .
console.log(aluna['cidade']) //para notação de colchetes [] tem que usar string pra acessar "nome"

//desestruturação de objeto para acessar informações com mais facilidade
let {nome, idade} = aluna //acessar objeto pela notação de objeto
console.log(aluna)

//objeto date e seus métodos
let hoje = new Date()
let semana = hoje.getW
let dia = hoje.getDate()
let mes = hoje.getMonth()
let ano = hoje.getFullYear()
console.log(`${dia}/${mes}/${ano}`) //imprime o mês anterior ao vigente

const dataFormatada = hoje.toLocaleDateString("pt-br")
console.log(dataFormatada)