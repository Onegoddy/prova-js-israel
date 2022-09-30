// pegar o formulario com o id 'dados'
const getForm = document.querySelector('#dados');
// console.log(getForm);
// gerar uma função para:
//  Cancelar o envio do form
//  Pegar o nome digitado
//  Armazenar o nome no local Storage
//  Limpar os dados digitados no form
//  Chamar o checkUser

getForm.addEventListener('submit',(e) =>{
    // cancelar o envio do form
    e.preventDefault();

    // recuperar o campo com o nome digitado
    const nameInput = document.querySelector('#nome');

    // salvar no localStorage o valor digitado pelo usuario
    localStorage.setItem('name', nameInput.value.toLowerCase())

    // limpar o campo digitado
    nameInput.value = "";

    // Chamar a função
    checkUser();
});

checkUser();