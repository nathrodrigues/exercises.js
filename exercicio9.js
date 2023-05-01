// Escreva um programa que calcule a média de um array de números e exiba o resultado no console.

function calcularMedia(array) {
    let soma = 0;
    for(let i = 0; i < array.length; i++) {
        soma =+ array[i]
    }

    const media = soma / array.length
    return media 
}

const numeros = [4, 7, 10, 5, 8]
const mediaResultante = calcularMedia(numeros)

console.log("Array: ", numeros)
console.log("Média", mediaResultante)