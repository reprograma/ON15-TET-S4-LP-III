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

let clienteLais = [
    {produto: 'Cachecol', valor: 250.0}, 
    {produto: 'Calça branca', valor: 500.0}, 
    {produto: 'Calça jeans', valor: 430.0}, 
    {produto: 'Blusa listrada', valor: 300.0}, 
    {produto: 'Jaqueta', valor: 670.0}]

let clienteBarbara = [
    {produto: 'Meia listrada', valor: 5.0}, 
    {produto: 'Calça moletom', valor: 10.0}, 
    {produto: 'Calça pijama', valor: 8.0}, 
    {produto: 'Calça branca', valor: 7.50}, 
    {produto: 'Blusa regata', valor: 12.80},
    {produto: 'Meia branca', valor: 6.30},  
    {produto: 'Meia colorida', valor: 3.49},
    {produto: 'Meião de futebol', valor: 9.70}, 
    {produto: 'Blusa vermelha', valor: 24.06}]

let valorTotal = []
let descontoAplicado = []

function aplicarDesconto(valor) {
    if (valor >= 200) {
        descontoAplicado.push(valor * 0.5)
    } else if (valor >= 100) {
        descontoAplicado.push(valor * 0.2)
    } else if (valor >= 80) {
        descontoAplicado.push(valor * 0.1)
    } else if (valor >= 50) {
        descontoAplicado.push(valor * 0.05)
    }
} 

function realizarCompra(comprasDaCliente) {

    let quantidadeDeProdutos = comprasDaCliente.length

    comprasDaCliente.forEach(item => {
        valorTotal.push(item.valor)
        aplicarDesconto(item.valor)
    })  
    
    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual) 
    descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)
    let valorFinal = valorTotal - descontoAplicado
    let dataDaCompra = new Date ()

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.',',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.',',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.',',')}`,
        "Data da Compra": dataDaCompra.toLocaleDateString('pt-BR', { 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric'
        })
    }
    if(valorFinal > 800 || quantidadeDeProdutos > 10) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Parabéns! Você ganhou um cupom de R$50,00 para a sua próxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLais)
