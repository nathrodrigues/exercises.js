// Escreva uma função chamada "maiorNumero" que receba um array de números como parâmetro e retorne o maior número presente no array. Teste a função com diferentes arrays.

function maiorNumero(array) {
    let maior = array[0]

    for(let i = 1; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i]
        }
    }

    return maior
}

const array1 = [1, 2, 3, 4, 5];
console.log(maiorNumero(array1)); // Saída: 5

const array2 = [10, 3, 8, 15, 1];
console.log(maiorNumero(array2)); // Saída: 15

const array3 = [-1, -5, -10, -3];
console.log(maiorNumero(array3)); // Saída: -1