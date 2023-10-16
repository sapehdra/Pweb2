let n = (parseInt(prompt("Digite um número:")))

let divisor = 2
let primo = true

while (divisor < n) {
    if (n % divisor == 0) {
        primo = false
    }
 
    divisor ++
}

if (primo) {
    alert("O número " + n + " é primo!")
} else {
    alert("O número " + n + " não é primo!")
}
