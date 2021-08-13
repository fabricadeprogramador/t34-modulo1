let total = 0
let item = {}

function lerDados() {
  item.nome = document.getElementById("nome").value
  item.valor = document.getElementById("valor").value
  item.qtd = document.getElementById("qtd").value
}

function validarEConverter() {
  if (item.nome != "" && item.valor != "" && item.qtd != "") {
    item.valor = parseFloat(item.valor)
    item.qtd = parseInt(item.qtd)
  } else {
    alert("Preencha todos os campos antes de inserir!")
  }
}

function inserir() {
  lerDados()
  validarEConverter()

  inserirLinha()
  cancelar()
  calcularTotal()
}

function inserirLinha() {
  let tabela = document.getElementById("corpoTabela")

  let linha = tabela.insertRow()

  let colunaNome = linha.insertCell()
  let colunaValor = linha.insertCell()
  let colunaQtd = linha.insertCell()

  colunaNome.innerText = item.nome
  colunaValor.innerText = item.valor
  colunaQtd.innerText = item.qtd
}

function calcularTotal() {
  total = total + item.valor * item.qtd

  document.getElementById("total").innerText = `Valor Total: R$ ${total.toFixed(
    2
  )}`
}

function cancelar() {
  document.getElementById("nome").value = ""
  document.getElementById("valor").value = ""
  document.getElementById("qtd").value = ""
}
