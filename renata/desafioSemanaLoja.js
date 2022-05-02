//5.1. Refaça o exercício da semana passada trocando o método utilizado para um que utiliza pelo menos 3 dos métodos aprendidos na aula de hoje! Nesta semana incluir a a data e hora da compra faz parte do retorno esperado para a entrega do exercício;


let Lilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }
]

let Jonas = [
    { produto: 'Calça jeans skinny', valor: 150.0 },
    { produto: 'Bolsa média', valor: 99.0 },
    { produto: 'Jaqueta jeans', valor: 300.0 },
    { produto: 'Chinelo', valor: 27.0 },
    { produto: 'Boné', valor: 130.0 },
]

let Maria = [
    { produto: 'Mochila', valor: 210.0 },
    { produto: 'Calça jeans', valor: 100.0 },
    { produto: 'Blaizer', valor: 300.0 },
    { produto: 'Vestido florido', valor: 99.0 },
    { produto: 'Regata branca', valor: 50.0 },
    { produto: 'Sandália', valor: 130.0 },
    { produto: 'Bermuda', valor: 60.0 },
    { produto: 'Tênis casual', valor: 80.0 },
    { produto: 'meia calça transparente', valor: 30.0 },
]




function calcular(cliente) {

    
    let valorTotal = cliente.reduce(
        (acumulador, elemento) => acumulador + elemento.valor, 0) ;
    let quantidadeTotalPeca = cliente.unshift(cliente.length);
    let valorDesconto = 0;    

    for (desconto of cliente) {
        if (desconto.valor >= 50.0 && desconto.valor < 80.0) {
            valorDesconto += desconto.valor * 0.05

        } else if (desconto.valor >= 80.0 && desconto.valor < 100.0) {
            valorDesconto += desconto.valor * 0.1

        } else if (desconto.valor >= 100.0 && desconto.valor < 200.0) {
            valorDesconto += desconto.valor * 0.2
            
        } else if (desconto.valor >= 200.0) {
            valorDesconto += desconto.valor * 0.5

        }
    }

    valorFinal = valorTotal - valorDesconto
    
    pecasCompradas = cliente.map(elemento => elemento.produto).join(" - ")
    


    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth();
    const ano = hoje.getFullYear();


    
    let notaFiscal = {
        "Data da Compra": `${dia}/${mes + 1}/${ano}`,
        "A quantidade de peças compradas": `${quantidadeTotalPeca}`,
        "O Valor total da compra sem desconto": `R$ ${valorTotal.toFixed(2).replace('.', ',')}`,
        "O valor total do desconto": `R$ ${valorDesconto.toFixed(2).replace('.', ',')}`,
        "O valor final com desconto": `R$ ${valorFinal.toFixed(2).replace('.', ',')}`,
        "Seu pedido": `${pecasCompradas}`,
    }
    
    if (quantidadeTotalPeca >= 10 || valorFinal > 800.0) {
        return console.log({
            
            ...notaFiscal,
            "Presentinho ;)"   : `Parabéns !!! Você recebeu um cupom de R$ 50,00 para a sua próxima compra!`
        
        })
    } else {

        return console.table({
            ...notaFiscal,
            "Obrigada pela sua compra":`Volte Sempre!!!`
        })
    }

}



    calcular(Lilit);
    console.log('-------------------------------------');
    console.log('-------------------------------------');
    calcular(Jonas);
    console.log('-------------------------------------');
    console.log('-------------------------------------');
    calcular(Maria);


