// Crie um programa que solicite ao usuário um número e exiba a tabuada desse número no console. 

const numero = parseInt(prompt("Digite um número:"));

console.log(`Tabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}

// function multiplication(number) {
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     for(i = 0; i < array.length; i++) {
//         let m = number * array[i]
//         console.log(m)
//     }
// }

// console.log(multiplication(2))