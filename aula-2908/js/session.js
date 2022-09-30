// armazenando na session
sessionStorage.setItem('name' , 'Marcelo');

// pegar dados
let nomeUser = sessionStorage.getItem('name');
console.log(`Nome do usuário: ${nomeUser}`);

// remover dados - um por vez
// sessionStorage.removeItem('name')

sessionStorage.setItem('a', '123');
sessionStorage.setItem('b', '456');

// remover todos de uma vez
sessionStorage.clear();