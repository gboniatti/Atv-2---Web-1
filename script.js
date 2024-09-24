const title = document.getElementById("titulo");

const helloBtn = document.getElementById("botao-ola");

const changeTitleBtn = document.getElementById("btn-mudar-titulo");

helloBtn.addEventListener("click", function(){
    alert("Olá!");
});

changeTitleBtn.addEventListener("click", function(){
    title.textContent = "O Titulo foi mudado utilizando JS!";
});

const changeTextBtn = document.getElementById("btn-mudar-texto");

changeTextBtn.addEventListener("click", function (){
    document.querySelector(".mensagem1").textContent = "Texto 1 alterado";
    document.querySelector(".mensagem2").textContent = "Texto 2 alterado";
    document.querySelector(".mensagem3").textContent = "Texto 3 alterado";
})