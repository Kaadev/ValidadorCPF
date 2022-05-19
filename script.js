console.log('Javascript carregado'); //teste

function validaCPF(cpf){ 

  console.log(cpf.length); // contabiliza quantos digitos tem o elemento

  if(cpf.length != 11){ // verifica se tem 11 digitos
  return false;}
  else{ 
    var numeros = cpf.substring(0,9); //separando numero dos digitos
    var digitos = cpf.substring(9); //digitos

    var soma = 0;
    for(var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    
    //validação do primeiro digito
    if(resultado != digitos.charAt(0)){ 
      return false;
    }
    
    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //validação do segundo digito
    if (resultado != digitos.charAt(1)) {
      return false;
    }
    return true; //retorno para if ou else de acordo com a resposta (true/false)
  }
  }

function validacao() { //adicionando função js no botão HTML
  console.log('iniciando validacao CPF'); 

  document.getElementById("success").style.display= "none";
  document.getElementById("error").style.display= "none";

  var cpf = document.getElementById("cpf_digitado").value; //var para armazenamento de elemento fornecido no input HTML

  var resultadoValidacao = validaCPF(cpf); //variável que armazena uma função de validar o cpf e tem como argumento o valor digitado/cpf

  if(resultadoValidacao){ //
    document.getElementById("success").style.display= "block"; //caso o cpf seja valido ele mostrará a msg de sucesso
  }
  else{
    document.getElementById("error").style.display="block"; //caso o cpf seja invalido ele mostrará a msg de erro
  }
}