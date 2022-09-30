const cardapioBar = ['pizza', 'coxinha', 'risole', 'pastel', 'torresmo', 'kibe'];

// foreach = ele sempre executará uma função para cada elemento do Array
// exibir a mensagem no console mostando o cardápio 

cardapioBar.forEach(item => console.log(`exibindo com forEach: ${item}`));
console.log(`-----------------------------------------------------------------------`);

const produtos = [{
        nome: 'Batata Recheada',
        preco: 19.99,
        fabricante: 'Sr. batata'
    },

    {
        nome: 'Pizza 4 quijos',
        preco: 89.99,
        fabricante: 'Sr. pizza'
    },

    {
        nome: 'Pastelão de Bacalhal',
        preco: 29.99,
        fabricante: 'Sr. pastel'
    },

    {
        nome: 'Coxinha',
        preco: 7.99,
        fabricante: 'Veloso Bar'
    },

    {
        nome: 'Lasanha de vovó',
        preco: 79.99,
        fabricante: 'Super Vovó'
    },

    {
        nome: 'Churrasco',
        preco: 189.99,
        fabricante: 'Sr. churrasco'
    },

    {
        nome: 'Strogonoff',
        preco: 39.99,
        fabricante: 'Sr. Strogo'
    },

    {
        nome: 'Feijoada',
        preco: 89.99,
        fabricante: 'Sr. black feijon'
    },

    {
        nome: 'Churrasco Grego',
        preco: 9.99,
        fabricante: 'Sr. Zeus'
    },

    {
        nome: 'Dogão do Tavão',
        preco: 9.99,
        fabricante: 'Sr. Hotavio'
    }
];

console.table(produtos);

// produtos.forEach(item => item.preco = item.preco*2);
produtos.forEach(item => item.preco = item.preco - (item.preco * .10));
console.table(produtos);

// temos um array de produtos, onde cada elemento é um objeto que 
// representa um tipo de comida com suas propriedades.
// O loop pegou casda elemento e aplicou a função para aumentar 
// o preço(propriedade) de cada produto   

const valores = [200, 500, 700, 160, 400, 380];
const desconto = 50;
const novosValores = valores.map(valor => valor - desconto)

console.log(valores);
console.log(novosValores);
// aplicar 10% de desconto nos produtos
// retornar apenas os preços dos produtos, pois ele foi o 
// unico valor a ser manipulado. Para juntar o desconto junto ao 
// restante do objeto precisamos do operador spread(...)
// ele pegara todo o objeto e colocara nesse novo array



const descProdutos = produtos.map(item => ({
    ...item, preco:(item.preco - (item.preco * .10).toFixed(2))
}));


console.table(descProdutos);

