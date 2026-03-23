// Seleciona o formulário
const form = document.getElementById("formContato");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

// captura valores
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

// regex simples para validar email
let emailValido = /\S+@\S+\.\S+/;

// verifica campos
if(nome === "" || email === "" || mensagem === ""){

alert("Preencha todos os campos");

return;

}

if(!emailValido.test(email)){

alert("Digite um email válido");

return;

}

// simulação de envio
alert("Mensagem enviada com sucesso!");

// limpa formulário
form.reset();

});

}