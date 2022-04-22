    //clientes
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

        let clienteOlivia = [
        {produto: 'Calça preta', valor: 100.0}, 
        {produto: 'Calça jeans clara', valor: 130.0},
        {produto: 'Jaqueta Jeans', valor: 300.0},
        {produto: 'Tênis casual preto', valor: 120.0}]

        let clienteBruna = [
        {produto: 'Short verde canelado', valor: 80.0},
        {produto: 'Blusa preta gola alta', valor: 60.0}, 
        {produto: 'meia calça transparente', valor: 30.0}, 
        {produto: 'meia calça transparente', valor: 30.0},
        {produto: 'Bolsa pequena', valor: 49.0},
        {produto: 'Salto agulha 35', valor: 250.0}]
        
        let valorTotal = []
        let descontos = []

        //função desconto
        
        function calcularDesconto(valor){

            if (valor >= 50 && valor <= 79){
                descontos.push(valor*0.05)
            
            } else if (valor >= 80 && valor <= 99) {
                descontos.push(valor*0.1)
                
            } else if (valor >= 100 && valor <= 199){
                descontos.push(valor*0.2)
            
            } else if (valor >= 200){
                descontos.push(valor*0.5)
            }
        }

        //função de compras          
        
        function iniciarCompras(produtosCliente){
            
            let totalProduto = produtosCliente.length

            produtosCliente.forEach(item => {
                valorTotal.push(item.valor)
                calcularDesconto(item.valor)
            })

            valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
            descontos = descontos.reduce((acumulador, atual) => acumulador + atual)
            let valorFinal = valorTotal - descontos
            let dataDaCompra = new Date()
                let notaFiscal = {
                "Valor Total": `R$ ${valorTotal.toFixed(2)}`,
                "Descontos": `R$ ${descontos.toFixed(2)}`,
                "Valor Final": `R$ ${valorFinal.toFixed(2)}`,
                "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                })
                            
            }
            

            if(totalProduto > 10 || valorFinal > 800){
                return console.table({
                    ...notaFiscal,
                    "Bônus": `Parabéns, você ganhou um cupom de R$ 50,00 para ser utilizado na sua próxima compra`})
            } else {
                return console.table(notaFiscal)
            }
        }


console.log("------------------------------------------------")
iniciarCompras(clienteLilit)
console.log("------------------------------------------------")
iniciarCompras(clienteOlivia)
console.log("------------------------------------------------")
iniciarCompras(clienteBruna)
console.log("------------------------------------------------")