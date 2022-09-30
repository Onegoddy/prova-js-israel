// criar um array
let arr = [];


function addItem(){
    // verificar se existe um array criado no local Storage
    // antes de adicionar um novo Item, pois se existir
    // iremos apenas recuperar o array e fazer a alteração
    // acessamos a localStorage e damos um getItem para recuperar o array
    // só que como ele está no formato de string temos de dar um JSON.parse
    // para que ele fique no formato de array
    
    if(localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'))
    }

    // Na primeira vez que ele funcionar irá pular o if pois n existe o array
    let novoItem = document.querySelector('#meuInput').value;
    
    // colocar o que foi digitado na variavel dentro dp array
    arr.push(novoItem);

    // limpar o campo do html
    document.querySelector('#meuInput').value = "";

    // inserir o conteudo no local storage - lembrando que é um ARRAY
    localStorage.meuArr = JSON.stringify(arr)
}

function showItem(){
// recuperando a div
let resultDiv = document.querySelector('#minhaDiv');

// limpar a div antes de exibir
resultDiv.innerHTML="";

// verificar se tem array no local storage
if(localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));    
}

for(let i in arr){
// entra no array e para cada item cria um p
let p = document.createElement('p');
p.innerHTML = arr[i];
resultDiv.append(p);
}

};

function clearItem() {
// zerar meu array
arr = ""
// atualizar meu array no local Storage
localStorage.meuArr = JSON.stringify(arr);
}