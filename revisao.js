
const professora = new Object()
  professora.nome = "Lilit"
  professora.sobrenome = "Bandeira"
  professora.cidade = "São Paulo"

const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Lemos" },
  idade: 20,
  cidade: {nascimento:"palmas",
  viveu:["são paulo","Salvador"]}
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
  
};
// console.log(aluna.nome.segundo)
// let {nome}
 console.log(aluna)
 // let {nome, _id } = aluna
 // const/let {} = nomeDoObjeto

 // console.log  (nome)

 let hoje = new Date ()
 let dia = hoje.getDate()
 let mes = hoje.getMonth()
 let ano =hoje.getFullYear()
 console.log(hoje) // 2022-04-13T13:59:44.804z
 
 let dataFormatada = hoje.toLocaleDateString('pt-BR'),{})
 console.log(dataFormatada)

 console.log(ano)


 console.log(nome.primeiro)


