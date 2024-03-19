// Tela de login 
function fazerLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  //Verificar se o login e senha estão corretos
  if (usuario === "admin" && senha === "senha123") {
    //redicionar o usuario para tela de contagem de dias
    window.location.href = "tela_contagem.html"
  } else {
    //Exibir uma mensagem de erro
    var alerta = document.getElementById("alerta");
    alerta.style.display = "block";
  }
}

function calcularDiferenca() {
    //Verificar os valores dos inputs
    var dataInicial = document.getElementById("dataInicial").value;
    var dataFinal = document.getElementById("dataFinal").value;

    //Verificar se os campos estão vazios
    if (dataInicial === '' || dataFinal === '') {
      alert("Por favor, preencha os dados a cima antes de calcular.");
      return; 
    }

    var dataInicial = new Date(document.getElementById("dataInicial").value);
    var dataFinal = new Date(document.getElementById("dataFinal").value);

    var diferenca = dataFinal.getTime() - dataInicial.getTime();
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var semanas = Math.floor(dias / 7);
  
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
  
    resultado.innerHTML += 'A diferença é : ' + '<br>';
    resultado.innerHTML += dias + ' dia(s)' + '<br>';
    resultado.innerHTML += semanas + ' semana(s)' + '<br>';
  
    // Calcula a diferença em anos, meses e dias
    var dataInicialUTC = new Date(Date.UTC(dataInicial.getFullYear(), dataInicial.getMonth(), dataInicial.getDate()));
    var dataFinalUTC = new Date(Date.UTC(dataFinal.getFullYear(), dataFinal.getMonth(), dataFinal.getDate()));
    var diferencaAnos = dataFinalUTC.getFullYear() - dataInicialUTC.getFullYear();
    var diferencaMeses = dataFinalUTC.getMonth() - dataInicialUTC.getMonth();
    var diferencaDias = dataFinalUTC.getDate() - dataInicialUTC.getDate();
  
    if (diferencaDias < 0) {
      diferencaMeses--;
      var ultimoDiaMesAnterior = new Date(dataFinalUTC.getFullYear(), dataFinalUTC.getMonth(), 0).getDate();
      diferencaDias += ultimoDiaMesAnterior;
    }
  
    if (diferencaMeses < 0) {
      diferencaAnos--;
      diferencaMeses += 12;
    }
  
    resultado.innerHTML += diferencaAnos + ' anos, ' + diferencaMeses + ' meses, ' + diferencaDias + ' dias<br>';
  
    // Calcula a diferença em dias úteis
    var diasUteis = 0;
    var dataAtual = new Date(dataInicialUTC);
  
    while (dataAtual <= dataFinalUTC) {
      if (dataAtual.getDay() !== 0 && dataAtual.getDay() !== 6) {
        diasUteis++;
      }
      dataAtual.setDate(dataAtual.getDate() + 1);
    }
  
    resultado.innerHTML += diasUteis + ' dias úteis' + '<br>';

  }

// limpar inputs
function limparInputs() {
  document.getElementById("dataInicial").value = '';
  document.getElementById("dataFinal").value = '';
  document.getElementById("resultado").innerHTML = '';
}

//Limpar Tela de login
function limpar() {
  document.getElementById("usuario").value = '';
  document.getElementById("senha").value = '';
}

//Botão voltar
function voltarPagina() {
  window.history.back();
}

//Visibilidade da senha
function alternarVisibilidadeSenha() {
  var senhaInput = document.getElementById("senha");
  var mostrarSenhaCheckbox = document.getElementById("mostrarSenha");

  if(mostrarSenhaCheckbox.checked) {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
}