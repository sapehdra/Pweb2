let sNotas = 0
const nNotas = 5

for (let i = 1; i <= nNotas; i++) {
    let nota = parseInt(prompt("Insira a nota: " + i))
    i --
}

const media = sNotas / nNotas

alert("A média das " + nNotas + "é igual a " + media)