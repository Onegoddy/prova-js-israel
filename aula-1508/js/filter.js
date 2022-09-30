// filter parece muito com o map - sintaxe é igual - função de callback
// percorrer todo o array - iterando os valores
// retornar apenas true / false - dessa forma ele filtra o array
// quando temos um retorno como true = armazenar o valor no novo array
// quando temos um retorno como false = não armazen o valor

// fazendo com for ANTIGAMENTE......
const numeros = [3,6,9,34,89,98,67,12,33,44,24,55,90];
const multiplosTres = [];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 3 === 0) {
        multiplosTres.push(numeros[i]);
    }
}
console.log(numeros);
console.log(multiplosTres);
console.log('--------------------------------------');

// usando filter
const numerosFiltados = numeros.filter(function(numero){
    // teste lógtico implícito  - se resposta for true = armazena no array
    // resposta for false = não armazena
    return numero % 3 === 0;
})
console.log(numeros);
console.log(numerosFiltados);
console.log('--------------------------------------');

// melhorando o filter
const numerosFilterArrow = numeros.filter(numero => numero % 3 === 0);
console.log(numeros);
console.log(numerosFilterArrow);
console.log('--------------------------------------');

// Juntando o map e o filter
const arrayMapFilter = numeros
.filter(numero => numero % 3 === 0)
.map(numero => numero * 2);

console.log(numeros);
console.log(arrayMapFilter);
console.log('--------------------------------------');









