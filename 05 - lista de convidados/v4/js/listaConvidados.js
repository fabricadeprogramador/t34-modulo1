function adicionarALista() {
  let nome = document.getElementById("inputConvidado").value

  if (nome != "") {
    //INSIRA AQUI O CÓDIGO DO EXERCÍCIO
    limparCampos()
  } else {
    alert("Preencha o nome do convidado!")
  }
}

function limparCampos() {
  document.getElementById("inputConvidado").value = ""
}
