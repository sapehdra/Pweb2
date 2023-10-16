function maiorNumero(n1, n2, n3)

let n1 = parseFloat(prompt("Digite um número:"))
let n2 = parseFloat(prompt("Digite outro número:"))
let n3 = parseFloat(prompt("Digite o último número:"))

if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
    let res = maiorNumero(n1, n2, n3)
    alert("O maior número é: " + res)
} else {
    alert("Um dos valores é inválido!")
}