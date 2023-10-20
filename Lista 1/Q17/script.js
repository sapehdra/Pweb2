const n = parseInt(prompt("Digite o número que você quer saber o fstorial:"))

let fatorial = 1

for (let i = 1; i <= n; i++) {
    fatorial *= i
}

console.log("O fatorial de " + n + " é " + fatorial)