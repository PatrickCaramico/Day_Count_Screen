function logar() {
    var user = document.getElementById("username");
    var senha = document.getElementById("senha");

    if (user.value == "admin" && senha.value == "123") {
        localStorage.setItem("acesso", true);

        alert("Credenciais Validadas! Seja Bem Vindo Patrick Caramico!");

        window.location.href = "tela_contagem.html";
    } else {
        alert("Usuário ou senha incorretos!");
        user.value = "";
        senha.value = "";
    }
}

window.onload = function() {
    alert("Utilize as seguintes credenciais para ter acesso:\nUSERNAME: admin / SENHA: 123");
};

// Função para alternar a visibilidade da senha
function alternarVisibilidadeSenha() {
    var senhaInput = document.getElementById("senha");
    var mostrarSenhaCheckbox = document.getElementById("mostrarSenha");

    if (mostrarSenhaCheckbox.checked) {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}
