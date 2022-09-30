// Recuperando a div welcome, ela ficará oculta
const welcomeDiv = document.querySelector('#welcome');

// cria uma função para mostrar o nome do usuário quando ele estiver logado

function checkUser(){
    // buscar no localstorage
    const userName = localStorage.getItem('name');
    
    if(userName){
        getForm.style.display = 'none';
        welcomeDiv.style.display = 'block';
        welcomeDiv.style.textTransform = 'capitalize'

        // exibir o nome do storage
        const userNameElement = document.querySelector('#userName')
        userNameElement.textContent = userName;
    }
    else{
        getForm.style.display = 'block'
        welcomeDiv.style.display = 'none'
    }
};