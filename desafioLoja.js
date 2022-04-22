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

let clienteMariazinha = [
    {produto: 'Calça mom jeans', valor: 110.0},
    {produto: 'Cropped listrado', valor: 35.0},
    {produto: 'Tênis street azul', valor: 190.0},
    {produto: 'Lenço cetim', valor: 30.0}]

let clienteGabinha = [
    {produto: 'Bermuda biker', valor: 80.0},
    {produto: 'Boné vermelho', valor: 50.0},
    {produto: 'Bota tratorada', valor: 235.0},
    {produto: 'Blusão verde', valor: 79.0}]


let valorTotalArray = []
let descontoAplicadoArray = [] 

function calcularDesconto(valor) {
    if (valor >= 200.0) {
        descontoAplicadoArray.push(valor * 0.5)
    } else if (valor >= 100.0) {
        descontoAplicadoArray.push(valor * 0.2)
    } else if (valor >= 80.0) {
        descontoAplicadoArray.push(valor * 0.1)
    } else if (valor >= 50.0) {
        descontoAplicadoArray.push(valor * 0.05)
    } 
}

function realizarCompra(comprasDaCliente) {

    let quantidadeDeProdutos = comprasDaCliente.length
    let valorTotal = 0
    comprasDaCliente.forEach(item => {
        valorTotalArray.push(item.valor)
        calcularDesconto(item.valor)
    })

    valorTotal = valorTotalArray.reduce((acumulador, atual) => acumulador + atual)
    let descontoAplicado = descontoAplicadoArray.reduce((acumulador, atual) => acumulador + atual)
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
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua próxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)
realizarCompra(clienteGabinha)
realizarCompra(clienteMariazinha)
