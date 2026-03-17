function tema(){

document.body.classList.toggle("dark")

}

document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("formulario")

if(form){

form.addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let mensagem = document.getElementById("mensagem").value
let status = document.getElementById("status")

if(nome === "" || email === "" || mensagem === ""){

status.innerText="Preencha todos os campos"
status.style.color="red"
return

}

status.innerText="Mensagem enviada com sucesso!"
status.style.color="green"

form.reset()

})

}

})