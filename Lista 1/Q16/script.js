const n = Math.floor(Math.random() * 100) + 1

let tentativas = 0
let acerto = false

while (!acerto) {
    let chute = parseInt(prompt("Adivinhe o número entre 1 e 100:"))
    tentativas ++

    if (chute > n) {
        alert("Digite um número menor!")
    } else if (chute < n){
        alert("Digite um número maior!")
    }
    else{
        acerto = true
        alert("Acertô mizerávi! XD Só precisou tentar " + tentativas + " vezes!")
    }
}