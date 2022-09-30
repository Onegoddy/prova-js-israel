// reduce itera sobre um array da mesma forma do filter e do map
// a diferença é que ele pode retornar: um array, um objeto, uma String, 
// ou até mesmo(mais comum) um único valor

const numeros = [3,6,8,9,12,123,89,45,34,27];
let soma = 0;
for(let i = 0; i < numeros.length; i++){
    soma+=numeros[i];
}

console.log(numeros);
console.log(soma);
console.log('-------------------------------------------------------');

// usando o reduce
// vamos precisar de dois paramteros, a function e o valor inicial
// lembrar o conceito de valor inicial do exemplo do for variável soma
// function callback ela também recebe dois parâmetros
// o primeiro é o valor atual na primeira iteração do reduce,
// é o valor inicial do array
// nesse caso vou chamar de valorAcumulador, pq ele ficará acumulando
// o resultado final
// o segundo parâmetro é o valor do array que está sendo iterado 
// vou chamar de valorArray

const somaReduce = numeros.reduce(function(valorAcumulador, valorArray){
    return valorAcumulador + valorArray
},0);

console.log(numeros);
console.log(`Soma com Reduce: ${somaReduce}`);
console.log('-------------------------------------------------------');

// reduce com arrow function
const somaReduceArrow = numeros.reduce((valorAcumulador, valorArray) => 
    valorAcumulador+valorArray,0);
console.log(numeros);
console.log(`Soma com Reduce Arrow: ${somaReduceArrow}`);
console.log('-------------------------------------------------------');

// Manipular objetos

const pessoas = [
    {
        nome: 'Eu',
        idade: '51'
    },

    {
        nome: 'Tu',
        idade: '31'
    },

    {
        nome: 'Ele',
        idade: '11'
    },

    {
        nome: 'Nós',
        idade: '15'
    },

    {
        nome: 'Vós',
        idade: '14'
    },

    {
        nome: 'Eles',
        idade: '45'
    }
];

console.log(pessoas);

// usar o reduce para retornar um objeto com as chaves maiores e menores
// definir o valor inicial sendo um objeto contendo dois arrays (menores e maiores)
// lembrar que o primeiro parametro da funcção reduce é o valor inicial

const pessoasReduce = pessoas.reduce(function(valorAcumulador, valorArray){
    // exibir o objeto pessoas inteiro ou uma parte dele
    // console.log(valorArray);
    // console.log(valorArray.idade);
    // vamos armazenar em uma constante os dados
    const propMaiorMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'; 
    console.log(propMaiorMenor);
    // veja que as strings são extamente os nomes dos arrays
    // vamos acessar o objeto que tema maiores ou menores(propriedade)
    // e adicionar a pessoa no array correspondente
    // quem tem o objeto com as chaves é o valorAcumulador
    // ele receberá o objeto
    valorAcumulador[propMaiorMenor].push(valorArray);
    return valorAcumulador;
},{maiores: [], menores: []});
console.log(pessoasReduce);