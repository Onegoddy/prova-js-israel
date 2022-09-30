// recuperar o botão de logout
const logoutBtn = document.querySelector('#logout');

// atribuindo o evento de click para chamar a função
logoutBtn.addEventListener('click',() =>{
    // remover o usuario do localStorage
    localStorage.removeItem('name');
    checkUser();
})