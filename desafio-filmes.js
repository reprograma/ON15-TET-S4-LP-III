const data = [
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

    let cliente1 = "Suspense";
    let cliente2 = "Corpo Elétrico"
    let cliente3 = "Homem-Aranha: Sem Volta para Casa"
    let cliente4 = "sci-fi" 
    let cliente5 = "romance"
 
function buscarTitulo(entradaDados){
    entradaDados = entradaDados.toLowerCase()
    let filmesEncontrados = []
    data.forEach(filme => {
      let titulo = filme.titulo.toLowerCase()
      if (titulo.includes(entradaDados)) {
        filmesEncontrados.push(filme)
      }
      
    })
    return filmesEncontrados
}    

function buscarGenero(entradaDados){
    let listaGenero = []
    entradaDados = entradaDados.toLowerCase()
      for (let filme of data) {
          if (typeof(filme.genero) == "string") {
            let filmeEncontrado = (filme.genero).toLowerCase().includes(entradaDados)
            !!filmeEncontrado ? listaGenero.push(filme) : null
          } else {
            let filmeEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entradaDados))
            filmeEncontradoArray != undefined ? listaGenero.push(filme) : null
          }
      }
        return listaGenero
}

function buscarFilmes(entradaDados){
    if (typeof(entradaDados) == "string"){
      
      let porTitulo = buscarTitulo(entradaDados)
      let porGenero = buscarGenero(entradaDados)

        if(porTitulo.length > 0 && porGenero.length > 0) {
          console.table(`********** BUSCA POR TÍTULO **********`)
          console.table(porTitulo)
          console.table(`********** BUSCA POR GENERO **********`)
          console.table(porGenero)
        } else if (porTitulo.length > 0) {
          console.table(`********** BUSCA POR TÍTULO **********`)
          console.table(porTitulo)
        } else if (porGenero.length > 0) {
          console.table(`********** BUSCA POR GENERO **********`)
          console.table(porGenero)
        } else {
          console.log("Nenhum filme foi encontrado.")
        }
    } else {
      console.log("Busca invalida, tente novamente.")
    }
}

buscarFilmes("susp")
buscarFilmes(cliente1)
buscarFilmes(cliente2)
buscarFilmes(cliente3)
buscarFilmes(cliente4)
buscarFilmes(cliente5)