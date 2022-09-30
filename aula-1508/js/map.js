// Map sempre retorna um novo Array
// Map é um método do Array
// Map é uma function que espera que você passe uma função de callback
// essa função de callback irá manipular cada valor do array(iterar o array)
// Map irá iterar os valores do array, um a um e apklicará a cada valor a funçãoq
// que será passada
// Map melhorar a qualidade do código, mais legível, menor, mais funcional


// usando um for comum
const numeros = [3,6,7,9,12,34,44,22,10,18];
const numerosMultiplicados = [];

for(let i=0; i<numeros.length; i++) {
    numerosMultiplicados.push(numeros[i]*2);
}
console.log(numeros);
console.log(numerosMultiplicados);
console.log('-------------------------------------------------------');

// usando map

const novoArrayMap = numeros.map(function(numero){
    // exibe os valores do array pois irá fazer a sua iteração em cada valor
    // console.log(numero);
    
    // vai pegar cada valor do Array, 
    // multiplicar por 2 e armazenar em um novo array
    // não aterará o array original
    return numero*2;
})

console.log(numeros);
console.log(novoArrayMap);
console.log('-------------------------------------------------------');


// Melhorando o Map
const arrayMapArrow = numeros.map(numero => numero*2);
console.log(numeros);
console.log(arrayMapArrow);
console.log('-------------------------------------------------------');

const nomes = ['tatiana', 'ana', 'valeria', 'paula', 'aline', 'sandra'];
const nomesMaisculos = nomes.map(nome => nome.toUpperCase());
console.log(nomes);
console.log(nomesMaisculos);



