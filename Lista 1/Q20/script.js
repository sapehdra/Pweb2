const peso = parseFloat(prompt("Digite os seu peso em Kg:"))
const altura = parseFloat(prompt("Digite a sua altura em M:"))

const imc = peso / (altura * altura)

console.log("Seu imc é: " + imc.toFixed[2])