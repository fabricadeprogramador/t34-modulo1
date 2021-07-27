let listaConvidados = ""

function adicionarALista() {
  let nome = document.getElementById("inputConvidado").value

  if (nome != "") {
    listaConvidados = listaConvidados + nome + "\n"

    document.getElementById("lista").innerText = listaConvidados
    document.getElementById("inputConvidado").value = ""
  } else {
    alert("Preencha o nome do convidado!")
  }
}
