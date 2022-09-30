// Salvando alguma informação na máquina do usuário
localStorage.setItem('user' , 'Israel');
localStorage.setItem('senha' , '123456');
localStorage.setItem('email' , 'atividadescnsl@gmail.com')

// exibir no console para isso iremos recuperar o conteudo no Localstorage
const user = localStorage.getItem('user');
const email = localStorage.getItem('email')
console.log(user , email);

// recuperar algo que não existe
const MySenha = localStorage.getItem('senha')
console.log(MySenha);

if(!MySenha){
    console.log(!MySenha);
    console.log('Informação não existe');
}
else{
    console.log(MySenha);
}

// remover um elemento
localStorage.removeItem('senha')

// mesmo passando um número ele armazena como string
localStorage.setItem('a' , 1)
localStorage.setItem('b' , 2)

// remover todos de uma só vez
localStorage.clear();