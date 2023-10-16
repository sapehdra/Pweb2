let ncerto = Math.floor(Math.random() * 10) + 1
let cont = 0
let tentativa

do {
    tentativa = parseInt(prompt("Adivinha o número entre 1 e 10:"))
    cont ++

    if (tentativa == ncerto) {
        alert("Goooollll! Seu chute está correto!")
    } else {
        alert("Errouuuu! Tente de novo!")
    }

} while (tentativa != ncerto);