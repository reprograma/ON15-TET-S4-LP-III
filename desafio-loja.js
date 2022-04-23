/* Desafio da semana 4 - Refazer o exercício da semana passada trocando
 o método utilizado por outros métodos aprendidos na aula da semana 4*/

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

let clienteSamara = [
        {produto: 'Blusa branca', valor: 39.0}, 
        {produto: 'short jeans', valor: 69.0}, 
        {produto: 'Jaqueta de couro', valor: 300.0}, 
        {produto: 'sapato branco', valor: 159.0}, 
        {produto: 'Calça social', valor: 135.0}, 
        {produto: 'Cinto preto', valor: 22.0},
        {produto: 'Cropped vermelho', valor: 40.0}]
        
let clienteJoandra = [
        {produto: 'Salto fino Zattini', valor: 159.0}, 
        {produto: 'Chinelo Havaianas slim ', valor: 39.0}, 
        {produto: 'T-shirt colorida', valor: 25.0}, 
        {produto: 'Tênis Olympikus', valor: 179.0}, 
        {produto: 'Calça jeans escura', valor: 130.0}, 
        {produto: 'Blusa baby look preta', valor: 35.0}]

let valorTotal = [] 
let descontoAplicado = [] 

// Função aplicada para o desconto

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

function realizarCompras(comprasDaClientes) {

    let quantidadeDeProdutos = comprasDaClientes.length

    comprasDaClientes.forEach(item => {
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
            "Bônus": 'Parabéns, você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompras(clienteJoandra)