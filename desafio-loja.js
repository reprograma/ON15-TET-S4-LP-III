///Refazer o exercício da semana passada trocando o método utilizado para um que foi aprendido na aula mais recente. 

//minha array pessoal
 
const clienteBrenda = [
    {produto: 'Mangá Damon Slayer Vol. 1', valor: 50.0},
    {produto: 'Mangá Naruto Vol. 1', valor: 60.0},
    {produto: 'Box Mangá Vampire Knight Memories', valor: 180.0},
    {produto: 'Mangá Uzumaki: Deluxe Edition', valor: 140.0},
    {produto: 'Mangá Your Name Edição Única', valor: 60.0},
    {produto: 'Box Castelo Animado', valor: 200.0}]

let valorTotal = []
let descontoAplicado = []

function valorDescontos(valor){
  if (valor >= 200.0) {
    descontoAplicado.push(valor * 0.5)
} else if (valor >= 100.0) {
    descontoAplicado.push(valor * 0.2)
} else if (valor >= 80.0) {
    descontoAplicado.push(valor * 0.1)
} else if (valor >= 50.0) {
    descontoAplicado.push(valor * 0.05)
} 
}

//aqui estou refatorando o código, útilizando o push, if else e reduce


function realizarCompra(comprasDaCliente) {

  let quantidadeDeProdutos = comprasDaCliente.length

  comprasDaCliente.forEach(item => {
  valorTotal.push(item.valor)
   valorDescontos(item.valor)
  })

  valorTotal = valorTotal.reduce((inicial, atual) => inicial + atual)
  descontoAplicado = descontoAplicado.reduce((inicial, atual) => inicial + atual)
  let valorFinal = valorTotal - descontoAplicado
  let dataDaCompra = new Date()

  let notaFiscal = {
    "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
    "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
    "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
    "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    
      })
    }

    if(quantidadeDeProdutos > 6 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteBrenda)

     

   