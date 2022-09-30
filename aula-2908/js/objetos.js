// salvando objetos
const pessoa = {
    Nome: 'Otávio',
    Idade: 17 ,
    Profissao: 'Dev'
};

console.log(pessoa, typeof pessoa);
console.log(pessoa.Nome);
console.log(pessoa.Idade);
console.log(pessoa.Profissao);


// assim não funciona
localStorage.setItem(pessoa , pessoa);

// faça assim
localStorage.setItem('pessoa' , JSON.stringify(pessoa));

// pegando dados más assim não ficará legl de manipular
const getPessoa = localStorage.getItem('pessoa');
console.log(getPessoa);

// coisa certa
const getPessoaCerta = JSON.parse(localStorage.getItem('pessoa'))
console.log(getPessoaCerta, typeof getPessoaCerta);
console.log(`Nome da pessoa ${getPessoaCerta.Nome}`);