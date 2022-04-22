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
  
  let cliente1 = "Suspense";
  let cliente2 = "Corpo Elétrico"
  let cliente3 = "Homem-Aranha: Sem Volta para Casa"
  let cliente4 = "sci-fi" 
  let cliente5 = "romance"
  
  function buscarPorTitulo(entrada) {
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
  
  function buscarPorGenero(entrada) {
       let listaPorGenero = []
       entrada = entrada.toLowerCase()
       for (let filme of data) {
         if (typeof(filme.genero) == "string") {
             let filmeEncontrado = (filme.genero).toLowerCase().includes(entrada)
             !!filmeEncontrado ? listaPorGenero.push(filme) : null
         } else {
             let filmeEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entrada))
             filmeEncontradoArray != undefined ? listaPorGenero.push(filme) : null
         }
       }
       return listaPorGenero
  }
  
  function buscarFilmes(entrada) {
      if (typeof(entrada) == "string") {
          let porTitulo = buscarPorTitulo(entrada)
          let porGenero = buscarPorGenero(entrada)
          if(porTitulo.length > 0 && porGenero.length > 0) {
              console.log("--------Encontrados por Título--------")
              console.log(porTitulo)
              console.log("--------Encontrados por Gênero--------")
              console.log(porGenero)
          } else if(porTitulo.length > 0) {
              console.log("--------Encontrados por Título--------")
              console.log(porTitulo)
          } else if(porGenero.length > 0) {
              console.log("--------Encontrados por Gênero--------")
              console.log(porGenero)
              console.log("--------------------------------------")
          } else {
              console.log("Nenhum filme ou dado foi encontrado com o valor digitado")
          }     
      } else {
        console.log('dado inválido')
      }
  }
  
  buscarFilmes("en")