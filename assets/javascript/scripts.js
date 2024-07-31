

let nome = document.getElementById("nome"); //Conectada ao input com id "nome".

let sobreNome = document.getElementById("snome"); //Conectada ao input com id "snome" (sobrenome).

let email = document.getElementById("email");

nome.style.width = "100%";
sobreNome.style.width = "100%";

function exibeNome() {

    alert("Seu nome é " + nome.value + " " + snome.value + "!");

}

function infoRetorno() {

    alert("Obrigado pela mensagem, " + nome.value + "! " + "entrarei em contato através do endereço de email " + email.value);

}

function validaNome() {

    let txt = document.getElementById("txtNome");

    if (nome.value.length < 3) {


        txt.innerHTML = "Nome Inválido...";
        txt.style.color = "red";

    } else {

        txt.innerHTML = "Nome Válido!";
        txt.style.color = "green";

    }
}

function validaEmail() {

    let txtEmail = document.getElementById("txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {

        txtEmail.innerHTML = "Email Inválido...";
        txtEmail.style.color = "red";

    } else {

        txtEmail.innerHTML = "Email Válido!";
        txtEmail.style.color = "green";

    }
}