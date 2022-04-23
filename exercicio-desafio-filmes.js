let data = [
    { titulo: "us", genero: "terror", ano: "2019" },
    { titulo: "transformers: O Lado Oculto da Lua",  genero: ["ação", "sci-fi"], ano: "2011" },
    { titulo: "moonfall - ameaça lunar", genero: ['Aventura', "sci-fi"], ano: "2022" },
    { titulo: "casa gucci", genero: "drama", ano: "2021" },
    { titulo: "encanto", genero: ["animação", "musical"], ano: "2021" },
    { titulo: "Demon Slayer - Mugen Train", genero: ["ação", "fantasia"], ano: "2019" },
    { titulo: "O Último Suspiro", genero: ["drama", "sci-fi"], ano: "2019" },
    { titulo: "Suspiria", genero: "terror", ano: "1977" },
    { titulo: "Corpo Elétrico", genero: ["drama", "ficção"], ano: "2017" },
    { titulo: "Amour", genero: ["drama", "romance"], ano: "2012" },
    { titulo: "Ninho de Musaranho", genero: "terror", ano: "2014" },
    { titulo: "Colonia", genero: "suspense", ano: "2015" },
    { titulo: "Homem-Aranha: Sem Volta para Casa", genero: ["ação", "aventura"], ano: "2021"}]
  
let buscaCliente1 = "Suspense";
let buscaCliente2 = "Corpo Elétrico"
let buscaCliente3 = "Homem-Aranha: Sem Volta para Casa"
let buscaCliente4 = "sci-fi" 
let buscaCliente5 = "romance"

function buscarPorTituloFilmes(entrada){
    let filmesEncontrados = []
    entrada = entrada.toLowerCase()

    data.forEach(filme => {
      let titulo = filme.titulo.toLowerCase()
      if (titulo.includes(entrada)) {
        filmesEncontrados.push(filme)
      }

    })
    return filmesEncontrados
       

}

function buscarPorGeneros(entrada){
  let listaPorGeneros = []
  entrada = entrada.toLowerCase()

  for (let filme of data) {
    if (typeof(filme.genero) == "string"){
      let generoEnontrado = (filme.genero).toLocaleLowerCase().includes(entrada);
      !!generoEnontrado ? listaPorGeneros.push(filme) : null;

    } else {
      let generoEnontradoArray = filme.genero.find(genero => genero.toLocaleUpperCase().includes(entrada));
      generoEnontradoArray != undefined ? listaPorGeneros.push(filme) : null;
    }
  }
  return listaPorGeneros
}

function buscarFilmes(entrada) {
  if (typeof(entrada) == "string") {
      let porTitulo = buscarPorTituloFilmes(entrada)
      let porGenero = buscarPorGeneros(entrada)

      if(porTitulo.length > 0 && porGenero.length > 0) {
          console.log("\n********* Encontrados por título ********")
          console.log(porTitulo)
          console.log("--------------------------------------")
          console.log("\n******** Encontrados por gênero ********")
          console.log(porGenero)
          console.log("--------------------------------------")
      } else if (porTitulo.length > 0) {
          console.log("\n********* Encontrados por título *********")
          console.log(porTitulo)
          console.log("--------------------------------------")
      } else if (porGenero.length > 0) {
          console.log("\n********* Encontrados por gênero *********")
          console.log(porGenero)
          console.log("--------------------------------------")
      } else {
          console.log("Nenhum filme ou dado foi encontrado com o valor digitado")
      }    
  } else {
      console.log('dado inválido')
  }
}

let dia = new Date
let dataHoje ={
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}
let dataLocalizada = dia.toLocaleString("pt-BR", dataHoje)
console.log(dataLocalizada)

buscarFilmes("terror")
buscarFilmes(buscaCliente1)
buscarFilmes(buscaCliente2)
buscarFilmes(buscaCliente3)
buscarFilmes(buscaCliente4)
buscarFilmes(buscaCliente5)
