/**
 * Variáveis globais
 */
let contador = 1 //Contador usado para setar os novos IDs
let idEdicao = -1 //Flag de edição
let nomeAtual = "" //Valor do nome do input atual
let idadeAtual = "" //Valor da idade do input atual
let sexoAtual = "" //Valor do sexo do input atual

/**
 * Invoca o lerDados para setar as variáveis globais,
 * verifica a flag de edição (idEdicao == -1 => Não Edição, idEdicao != -1 => Edição)
 * Em caso de edição, chama a função confirmar Edição
 * Em caso de novo elemento, chama a função para adicionar novo elemento a lista
 * Por final, limpa os campos e reseta a flag
 */
function salvar() {
  lerDados()

  if (idEdicao == -1) {
    //Insere elemento novo
    adicionarALista()
  } else {
    //Edita elemento da lista
    confirmarEdicao()
  }

  limparCampos()
}

/**
 * Lê os dados dos inputs e coloca nas variáveis globais nomeAtual, idadeAtual e sexoAtual
 * ou exibe alerta em caso de não preenchimento dos campos
 */
function lerDados() {
  nomeAtual = document.getElementById("inputConvidado").value
  idadeAtual = document.getElementById("inputIdade").value

  let elementoRadio = document.querySelector("[type=radio]:checked")

  if (nomeAtual != "" && idadeAtual != "" && elementoRadio != null) {
    sexoAtual = elementoRadio.value
  } else {
    alert("Preencha o nome do convidado!")
  }
}

/**
 * Apenas chama a função para adicionar novo elemento na lista
 */
function adicionarALista() {
  inserirLinha(nomeAtual, idadeAtual, sexoAtual)
}

/**
 * Busca o elemento da linha clicada (TR) para edição (id == idEdicao)
 * Encontra os elementos filhos (TDs) da linha
 * Seta as informações lidas dos inputs, anteriormente setadas nas variáveis globais
 * nos respectivos elementos filhos
 */
function confirmarEdicao() {
  let linhaEditar = document.getElementById(idEdicao)

  linhaEditar.children[0].textContent = nomeAtual
  linhaEditar.children[1].textContent = idadeAtual
  linhaEditar.children[2].textContent = sexoAtual

  idEdicao = -1
}

/**
 * Cria uma nova linha contendo as informações lidas e insere na tabela
 */
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
  let colunaBotaoEditar = document.createElement("td")

  //Inserindo os valores dos campos nas respectivas colunas
  colunaNome.innerText = nome
  colunaIdade.innerText = idade
  colunaSexo.innerText = sexo

  //Criando icone de deletar
  let botaoDeletar = document.createElement("img")
  let botaoEditar = document.createElement("img")

  //Setar o src da imagem
  botaoDeletar.src = "img/delete.png"
  botaoEditar.src = "img/edit.svg"

  //Setar onclick do botão deletar
  botaoDeletar.setAttribute("onclick", `deletarLinha('${contador}')`)
  botaoEditar.setAttribute(
    "onclick",
    `prepararEdicao('${contador}', '${nome}', '${idade}', '${sexo}')`
  )

  //Colocar o botão como filho da linha
  colunaBotaoDeletar.appendChild(botaoDeletar)
  colunaBotaoEditar.appendChild(botaoEditar)

  //Colocar as colunas como filhas da linha
  linha.appendChild(colunaNome)
  linha.appendChild(colunaIdade)
  linha.appendChild(colunaSexo)
  linha.appendChild(colunaBotaoDeletar)
  linha.appendChild(colunaBotaoEditar)

  //Criar ID para a linha
  linha.id = contador

  //Incrementar o contador
  contador++

  //Colocar a linha como filha da tabela(tBody)
  tabela.appendChild(linha)
}

/**
 * Reseta os inputs e reseta a flag de edição (idEdicao volta para -1)
 */
function limparCampos() {
  document.getElementById("inputConvidado").value = ""
  document.getElementById("inputIdade").value = ""
  document.getElementById("inputFem").checked = false
  document.getElementById("inputMasc").checked = false

  idEdicao = -1
}

/**
 * Pede confirmação para o usuário e em caso positivo, remove a linha inteir a da tabela
 */
function deletarLinha(id) {
  if (confirm("Tem certeza que deseja deletar este item?")) {
    document.getElementById(id).remove()
  }
}

/**
 * Prepara a tela para a edição, inserindo os valores de nome, idade e sexo, da linha clicada
 * nos inputs para edição
 * Também seta a flag (idEdicao recebe o id da linha), indicando futura edição
 * para a função salvar
 */
function prepararEdicao(id, nome, idade, sexo) {
  idEdicao = id

  document.getElementById("inputConvidado").value = nome
  document.getElementById("inputIdade").value = idade

  if (sexo == "M") {
    document.getElementById("inputMasc").checked = true
  } else {
    document.getElementById("inputFem").checked = true
  }
}
