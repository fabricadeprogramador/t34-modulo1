let contador = 1

function adicionarALista() {
  let nome = document.getElementById("inputConvidado").value
  let idade = document.getElementById("inputIdade").value

  let elementoRadio = document.querySelector("[type=radio]:checked")

  if (nome != "" && idade != "" && elementoRadio != null) {
    let sexo = elementoRadio.value

    inserirLinha(nome, idade, sexo)
    limparCampos()
  } else {
    alert("Preencha o nome do convidado!")
  }
}

function inserirLinha(nome, idade, sexo) {
  //Iniciando algoritmo de inserção da linha na tabela

  //Busca o elemento tBody da tabela
  let tabela = document.getElementById("tabela")

  //Cria um elemento de linha da tabela (tr)
  let linha = document.createElement("tr")

  //Cria 3 colunas para a tabela (td)
  let colunaNome = document.createElement("td")
  let colunaIdade = document.createElement("td")
  let colunaSexo = document.createElement("td")
  let colunaBotaoDeletar = document.createElement("td")

  //Inserindo os valores dos campos nas respectivas colunas
  colunaNome.innerText = nome
  colunaIdade.innerText = idade
  colunaSexo.innerText = sexo

  //Criando icone de deletar
  let botaoDeletar = document.createElement("img")

  //Setar o src da imagem
  botaoDeletar.src = "img/delete.png"

  //Setar onclick do botão deletar
  botaoDeletar.setAttribute("onclick", `deletarLinha('${contador}')`)

  //Colocar o botão como filho da linha
  colunaBotaoDeletar.appendChild(botaoDeletar)

  //Colocar as colunas como filhas da linha
  linha.appendChild(colunaNome)
  linha.appendChild(colunaIdade)
  linha.appendChild(colunaSexo)
  linha.appendChild(colunaBotaoDeletar)

  //Criar ID para a linha
  linha.id = contador

  //Incrementar o contador
  contador++

  //Colocar a linha como filha da tabela(tBody)
  tabela.appendChild(linha)
}

function limparCampos() {
  document.getElementById("inputConvidado").value = ""
  document.getElementById("inputIdade").value = ""
  document.getElementById("inputFem").checked = false
  document.getElementById("inputMasc").checked = false
}

function deletarLinha(id) {
  if (confirm("Tem certeza que deseja deletar este item?")) {
    document.getElementById(id).remove()
  }
}
