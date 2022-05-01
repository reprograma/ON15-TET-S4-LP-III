let clienteRosario = [
    {produto: 'Macacao longo', valor: 300.0},
    {produto: 'Sandalia Anabelle', valor: 110.0}, 
    {produto: 'Cinto preto', valor: 108.0}, 
    {produto: 'Brinco diamante', valor: 350.0},  
    {produto: 'Bolsa petit', valor: 279.0}, 
    {produto: 'Óculos gucci', valor: 450.0}, ]
   
    let valorTotal = []
    let descontoAplicado = []

function calcularDesconto(valor) {
    if (valor >= 200) {
        descontoAplicado.push(valor * 0.5)
     }  else if (valor >= 100) {
        descontoAplicado.push(valor * 0.2)
     }  else if (valor >= 80) {
        descontoAplicado.push(valor * 0.1)
     }  else if (valor >= 50) {
        descontoAplicado.push(valor * 0.05)
     }    
}

    function fazerCompra(listaDeCompras) {
   
        qtdProdutos = listaDeCompras.lenght

        listaDeCompras.forEach(item =>{
            valorTotal.push(item.valor)
            calcularDesconto(item.valor)
        })

   valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
   descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)

    let valorFinal = valorTotal - descontoAplicado
    console.log(descontoAplicado)

    for (let item of listaDeCompras) {
        valorTotal += item.valor
        
    }

    let dataDaCompra = new Date()
        console.log(dataDaCompra)

    let cupomFiscal = {
        "Valor Total": valorTotal,
        "Desconto Aplicado": descontoAplicado,
        "Valor Final": valorFinal,
        "Compra realizada em": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
        
    }

    if (qtdProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...cupomFiscal,
            "Presente!": "Você ganhou um cupom de R$50,00 para sua próxima compra! =)"
        })

    } else {
        return console.log(cupomFiscal)
    }
}
 
fazerCompra(clienteRosario)