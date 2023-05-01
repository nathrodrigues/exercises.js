//Crie uma função chamada "fatorial" que receba um número como parâmetro e retorne o seu fatorial. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Teste a função com diferentes números.

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = numero; i >= 2; i--) {
        resultado *= i;
      }
      return resultado;
    }
  }
  
  console.log(fatorial(5)); // Saída: 120
  console.log(fatorial(0)); // Saída: 1
  console.log(fatorial(1)); // Saída: 1
  console.log(fatorial(6)); // Saída: 720