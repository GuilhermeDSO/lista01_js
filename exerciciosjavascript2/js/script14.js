alert("Programa 14 - Massa Corporal (IMC)")

let peso = parseFloat(prompt("Digite seu peso"))
let altura = parseFloat(prompt("Digite sua altura"))

imc = peso / (altura * altura)

alert("Sua índice de Massa corporal é " +imc)