//NOME: Maria Fernanda Moreira Tavares

let clienteLilit = [{
        produto: 'Bolsa pequena',
        valor: 49.0
    },
    {
        produto: 'Cinto preto',
        valor: 22.0
    },
    {
        produto: 'Jaqueta Jeans',
        valor: 300.0
    },
    {
        produto: 'Calça preta',
        valor: 100.0
    },
    {
        produto: 'Blusa simples',
        valor: 35.0
    },
    {
        produto: 'Calça jeans clara',
        valor: 130.0
    },
    {
        produto: 'Blusa preta gola alta',
        valor: 60.0
    },
    {
        produto: 'Short verde canelado',
        valor: 80.0
    },
    {
        produto: 'Salto agulha 39',
        valor: 250.0
    },
    {
        produto: 'Tênis casual preto',
        valor: 120.0
    },
    {
        produto: 'meia calça transparente',
        valor: 30.0
    }
]

let clienteMalu = [{
        produto: 'Bolsa pequena',
        valor: 30.00
    },
    {
        produto: 'Cinto preto',
        valor: 45.00
    },
    {
        produto: 'Jaqueta Jeans',
        valor: 10.00
    },
    {
        produto: 'Calça preta',
        valor: 56.00
    },
    {
        produto: 'Blusa simples',
        valor: 40.00
    },
    {
        produto: 'Calça jeans clara',
        valor: 30.00
    },
    {
        produto: 'Blusa amarela gola alta',
        valor: 22.00
    },
    {
        produto: 'Blusa rosa gola alta',
        valor: 20.00
    },
    {
        produto: 'Blusa verde gola alta',
        valor: 15.00
    },
    {
        produto: 'Blusa lilás gola alta',
        valor: 35.00
    },
    {
        produto: 'Blusa branca gola alta',
        valor: 40.00
    }

]

let clienteCarol = [{
        produto: 'Bolsa grande',
        valor: 350.00
    },
    {
        produto: 'Cinto rosa',
        valor: 45.00
    },
    {
        produto: 'Jaqueta de couro',
        valor: 150.00
    },
    {
        produto: 'Anel de prata',
        valor: 80.00
    },
    {
        produto: 'Blusão',
        valor: 40.00
    },
    {
        produto: 'Calça jeans preta',
        valor: 77.00
    },
    {
        produto: 'Biquini Rosa',
        valor: 85.00
    }
]


let desconto = 0;
let valorTotal = 0;

function calcularDesconto(cliente) {
    let auxValortotal = new Array();
    let auxDesconto = new Array();
    for (let produto of cliente) {
        auxValortotal.push(produto.valor);
        if (produto.valor >= 50 && produto.valor < 80) {
            auxDesconto.push(produto.valor*0.05)
        } else if (produto.valor >= 80 && produto.valor < 100) {
            auxDesconto.push(produto.valor*0.10)
        } else if (produto.valor >= 100 && produto.valor < 200) {
            auxDesconto.push(produto.valor*0.20)
        } else if (produto.valor >= 200) {
            auxDesconto.push(produto.valor*0.5)
        }
    }


    desconto = auxDesconto.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual,0
    );

    valorTotal = auxValortotal.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual,0
    );
}

function finalizarCompra(cliente) {
    calcularDesconto(cliente)

    let data = new Date();
    let valorFinal = valorTotal - desconto;
    let quantidadeItens = cliente.length;
    console.log(`-- Bem-Vindo! A data de hoje é ${data.toDateString('pt-br')}`)
    console.log(`-- Olá ! Sua lista de compra foi :`)
    console.table(cliente)
    console.log(` --O somatorio dos seus ${quantidadeItens} produtos sem desconto ficou : R$ ${valorTotal.toFixed(2)}, com o desconto o valor ficou: R$ ${valorFinal.toFixed(2)} !!!`)
    if (quantidadeItens > 10 || valorFinal > 800) {
        console.log(" -- Parabéns você ganhou um cupom de R$50 para sua proxima compra!!!! <3")
    }
}

finalizarCompra(clienteLilit);
finalizarCompra(clienteMalu);
finalizarCompra(clienteCarol);