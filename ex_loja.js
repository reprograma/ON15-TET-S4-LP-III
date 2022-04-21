let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]




    let clienteManuela = [
    {produto: 'Biquini verde', valor: 65.0},
    {produto: 'Vestido preto longo', valor: 220.0}, 
    {produto: 'Jaqueta de couro preta', valor: 300.0}, 
    {produto: 'Calça jeans', valor: 100.0}, 
    {produto: 'Cropped', valor: 35.0}, 
    {produto: 'Calça moletom', valor: 80.0}, 
    {produto: 'Necessaire', valor: 40.0}, 
    {produto: 'Bota branca', valor: 120.0}, 
    {produto: 'Salto plataforma', valor: 150.0}, 
    {produto: 'Tênis branco', valor: 120.0}, 
    {produto: 'Bolsa branca', valor: 90.0},
    {produto: 'Mochila', valor: 130.0}, 
    {produto: 'Boné verde', valor: 60.0}, 
    {produto: 'Chinelo simples', valor: 30.0}]

    let clienteNathalia = [

        {produto: 'Conjunto moletom', valor: 300.0},
        {produto: 'Vestido longo preto e branco', valor: 120.0}, 
        {produto: 'Rasteirinha', valor: 40.0}, 
        {produto: 'Conjunto de brincos e cordão', valor: 45.0}, 
        {produto: 'Body vermelho', valor: 35.0}]

        let valorTotal = [] 
        let descontosAplicados = [] 


        function calcularDescontosTotais(valor){ 

if (valor >= 200.0) { 
    descontosAplicados.push(valor * 0.5)
} else if (valor >= 100.0) {
    descontosAplicados.push(valor * 0.2) 
} else if (valor >= 80.0) {
    descontosAplicados.push(valor * 0.1) 
} else if (valor >= 50.0) {
    descontosAplicados.push(valor * 0.05)

} 
} 
function realizarCompras(comprasDasClientes) {

    let quantidadeDeProdutos = comprasDasClientes.length

    comprasDasClientes.forEach(item => {
        valorTotal.push(item.valor)
        calcularDescontosTotais(item.valor)
    })

    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
    descontosAplicados = descontosAplicados.reduce((acumulador, atual) => acumulador + atual)
    let valorFinal = valorTotal - descontosAplicados
    let dataDaCompra = new Date()
    let notinha = {
        "Valor total da compra": `R$${valorTotal}`,
        "Descontos Aplicados": `R$${descontosAplicados}`,
        "Valor final da compra": `R$${valorFinal}`,
        "Data da Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.log({
            ...notinha,
            "Surpresa!": 'Você ganhou R$50,00 para a sua próxima compra'
        })
    } else {
        return console.log(notinha)
    }
}

realizarCompras(clienteNathalia)