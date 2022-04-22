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

let clienteLeticia = [
    {produto: 'Jaqueta Jeans clara', valor: 300.0}, 
    {produto: 'Calça branca', valor: 100.0},  
    {produto: 'Calça jeans ', valor: 130.0}, 
    {produto: 'Salto agulha 37', valor: 250.0}, 
    {produto: 'Tênis casual azul', valor: 120.0},
    {produto: 'Tênis casual vermelho', valor: 120.0},
    {produto: 'Tênis casual amarelo', valor: 120.0},
    {produto: 'Tênis casual verde', valor: 120.0}]

let clienteAnaCrstina = [
    {produto: 'Cinto aul', valor: 22.0},  
    {produto: 'Calça jeans clara com brilho', valor: 130.0}]

let valorTotal = [] 
let descontoAplicado = [] 

function calcularDesconto(valor) {
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

function realizarCompra(comprasDaCliente) {

    let quantidadeDeProdutos = comprasDaCliente.length

    comprasDaCliente.forEach(item => {
        valorTotal.push(item.valor)
        calcularDesconto(item.valor)
    })

    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
    descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)
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

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}


realizarCompra(clienteAnaCrstina) 


