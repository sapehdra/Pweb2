const palavra = prompt("Insira a palavra que você quer saber se é um palíndromo:").toLowerCase()

function palindromo(palavra) {
    const pSemEspacos = palavra.replace()

    const pInvertida = pSemEspacos.split("").reverse().join("")

    if (pSemEspacos == pInvertida) {
        return true
    } else {
        return false
    }
}

if (palindromo(palavra)) {
    console.log(palavra + "é um palíndrmo!")
} else {
    console.log(palavra + " não é um palíndrmo!")
}