alert("Programa 15 -  Nome do Produto, Preço e Desconto")

let nomeProduto = prompt("Digite o nome do Produto")
let precoProduto = parseFloat(prompt("Digite o preço do Produto")) 

let precoComDesconto = precoProduto * 0.9


 alert(`O produto ${nomeProduto} custa R$ ${precoComDesconto.toFixed(2)} com 10% de desconto.`) 