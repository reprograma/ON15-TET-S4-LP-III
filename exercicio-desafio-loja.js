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

let clientePaola= [
    {produto: 'Bolsa grande', valor: 110.0}, 
    {produto: 'Cinto marron', valor: 25.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça azul', valor: 200.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Saia Longa', valor: 129.95}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Vestido estampa animal', valor: 79.95}, 
    {produto: 'Tênis casual branco', valor: 120.0}, 
    {produto: 'Vestido midi babado open', valor: 119.95}]

let clienteSuzana = [
    {produto: 'Bolsa infantil unicórnio', valor: 75.0}, 
    {produto: 'Jaqueta Infantil coração', valor: 119.0}, 
    {produto: 'Blusa Infantil estampa unicórnio', valor: 20.0}, 
    {produto: 'Pijama infantil', valor: 129.9}]        


let valorTotal = []
let descontoTotal = []

function calcularDesconto(valor) {
    if (valor >= 200.0) {
        descontoTotal.push(valor * 0.5)         
    } else if (valor >= 100.0) {
        descontoTotal.push(valor * 0.2)
    } else if (valor >= 80.0) {
        descontoTotal.push(valor * 0.1)
    } else if (valor >= 50.0) {
        descontoTotal.push(valor * 0.05)
    } 
}

function realizarCompra(comprasDaCliente){
    let quantidadeDeItens = comprasDaCliente.length

    comprasDaCliente.forEach(item => {
        valorTotal.push(item.valor)
        calcularDesconto(item.valor)  
    })
    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
    descontoAplicado = descontoTotal.reduce((acumulador, atual) => acumulador + atual)

    let valorFinal = valorTotal - descontoAplicado


  

    let dataDaCompra = new Date()
    console.log(dataDaCompra)

    console.log('==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==')
    console.log('                               CUPOM FISCAL                                        ')
    console.log('==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==')
    let dia = new Date
    let dataHoje = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    let dataLocalizada = dia.toLocaleString("pt-BR", dataHoje)
    console.log(`Dia da compra realizada: ${dataLocalizada}`)

    let notaFiscal = {
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'}),
        "Valor Total": `R$ ${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$ ${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$ ${valorFinal.toFixed(2).replace('.', ',')}`
    }
        
           

    if(quantidadeDeItens > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
         "Bônus": 'Parabéns! Você ganhou um cupom de R$50,00 para a sua prõxima compra'
     })
    } else {
        return console.table(notaFiscal)
    }
}    

// realizarCompra(clienteLilit)
realizarCompra(clientePaola)
// realizarCompra(clienteSuzana)
