//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
// adicionar os nomes dos amigos 
function adicionarAmigo() {
    let nome = document.querySelector("input").value.trim();
     if (nome == ""){
        alert("Por favor, insira um nome.");
        return;
    }
     if (amigos.includes(nome)) { 
        alert("Esse nome já foi adicionado.");
        return;
    }
    else{
        amigos.push(nome);
        document.querySelector("input").value = '';  
         atualizarListaAmigos();
    }
    }
    //Atualizando lista de amigos
function atualizarListaAmigos() {
    let lista = document.querySelector("#listaAmigos");
     lista.innerHTML = '';

     for (let i = 0; i <amigos.length; i ++){
         lista.innerHTML += `<li>${amigos[i]}</li>`;
         console.log(lista)

    }
}
//Sorteando amigo usando Math.random e Math.floor
function sortearAmigo() {
    let resultado = document.querySelector("#resultado");
    if (amigos.length == 0) {
         alert("Adionar amigos para sortear!");
        return;  
    } 

    else {
        let sorteioAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[sorteioAleatorio];
        resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
    }
}
// Reiniciar o jogo
function reiniciarSorteio (){
        amigos = []; 
        document.querySelector("#listaAmigos").innerHTML = '';
        document.querySelector("#resultado").innerHTML = '';
        document.querySelector("#amigo").value = '';
}