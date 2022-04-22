

// 5.2. Crie uma aplicação simples que faça uma busca no nosso banco de dados fake (let data) pelo nome do filme (retorno único) ou gênero (retorno em lista) fornecido pela cliente, enviar como resposta para cada filme encontrado um objeto com título, gênero e ano de lançamento;

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


    function encontrarPorTitulo(nome) {
        let titulosEncontrados = []
      nome = nome.toLowerCase()
        data.forEach(filme => {
            let titulo = filme.titulo.toLowerCase()
            if (titulo.includes(nome)) {
                titulosEncontrados.push(filme)
            }
        })
        return titulosEncontrados;
    }
  
    function encontrarPorGenero(entrada) {
        let generosEncontrados = [];
        entrada = entrada.toLowerCase();
        for (let filme of data) {
            if (typeof (filme.genero) == "string") {
                let titulosEncontrados = (filme.genero).toLowerCase().includes(entrada)
                !!titulosEncontrados ? generosEncontrados.push(filme) : null;
            } else {
                let tituloEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entrada))
                tituloEncontradoArray != undefined ? generosEncontrados.push(filme) : null;
            }
        }
        return generosEncontrados;
    }


    function encontrarPorAno(entrada) {
        let anosEncontrados = []
        for(let year of data) {
            if(typeof(year.ano) == "string") {
                let filmesEncontrados = year.ano.includes(entrada)
                !!filmesEncontrados ? anosEncontrados.push(year) : null;
            } else {
                let filmesEncontrados = year.ano.find(ano => ano.includes(entrada))
                !!filmesEncontrados ? anosEncontrados.push(year) : null;
            }
        }
        return anosEncontrados;
    }


    function encontrarFilmes(entrada){
        if(typeof(entrada) == "string"){
            let porTitulo = encontrarPorTitulo(entrada);
            let porGenero = encontrarPorGenero(entrada);
            let porAno = encontrarPorAno(entrada);
            if(porTitulo.length > 0 && porGenero.length> 0 && porAno.length > 0){
            console.table("--------Encontrados por título--------")
            console.table(porTitulo)
            console.table("--------------------------------------")
            console.table("--------Encontrados por gênero--------")
            console.table(porGenero)
            console.table("--------------------------------------")
            console.table("--------Encontrados por ano--------")
            console.table(porAno)
            console.table("--------------------------------------")
            } else if (porTitulo.length > 0 ){
                console.table("--------Encontrados por título--------")
                console.table(porTitulo)
                console.table("--------------------------------------")
            } else if(porGenero.length > 0){
                console.table("--------Encontrados por gênero--------")
                console.table(porGenero)
                console.table("--------------------------------------")
            } else if(porAno.length > 0){
                console.table("--------Encontrados por Ano--------")
                console.table(porAno)
                console.table("--------------------------------------")
            } else {
                console.log("Nenhum filme encontrado")
            }
            
        } else{
            console.log("Entrada inválida")
        }
    }

        encontrarFilmes("2017");
        console.log("--------------------------------------")
        console.log("--------------------------------------")
        encontrarFilmes("Suspense");
        console.log("--------------------------------------")
        console.log("--------------------------------------")
        encontrarFilmes("homem-aranha");
        console.log("--------------------------------------")
        console.log("--------------------------------------")
        encontrarFilmes("sci-fi");
        console.log("--------------------------------------")
        console.log("--------------------------------------")
        encontrarFilmes("rom");

