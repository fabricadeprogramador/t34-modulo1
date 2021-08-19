class ListaController {
  constructor() {
    this.total = 0
    this.item = {}
    this.geradorId = 0
  }

  lerDados() {
    this.item.nome = document.getElementById("nome").value
    this.item.valor = document.getElementById("valor").value
    this.item.qtd = document.getElementById("qtd").value
  }

  validarEConverter() {
    if (this.item.nome != "" && this.item.valor != "" && this.item.qtd != "") {
      this.item.valor = parseFloat(this.item.valor)
      this.item.qtd = parseInt(this.item.qtd)
    } else {
      alert("Preencha todos os campos antes de inserir!")
    }
  }

  inserir() {
    this.lerDados()
    this.validarEConverter()

    this.inserirLinha()
    this.cancelar()
    this.calcularTotal()
  }

  inserirLinha() {
    let tabela = document.getElementById("corpoTabela")

    let linha = tabela.insertRow()
    linha.id = this.geradorId

    let colunaNome = linha.insertCell()
    let colunaValor = linha.insertCell()
    let colunaQtd = linha.insertCell()
    let colunaRemover = linha.insertCell()

    colunaNome.innerText = this.item.nome
    colunaValor.innerText = this.item.valor
    colunaQtd.innerText = this.item.qtd

    let imagemRemover = document.createElement("img")
    imagemRemover.src = "img/remover.png"
    imagemRemover.setAttribute(
      "onclick",
      `controladorLista.remover('${this.geradorId}', ${JSON.stringify(
        this.item
      )})`
    )

    colunaRemover.appendChild(imagemRemover)

    this.geradorId++
  }

  remover(idRemocao, item) {
    if (
      confirm(
        `Tem certeza que deseja remover o item da posição ${
          parseInt(idRemocao) + 1
        }?`
      )
    ) {
      document.getElementById(idRemocao).remove()
      this.recalcularTotal(item)
    }
  }

  recalcularTotal(itemRemovido) {
    this.total = this.total - itemRemovido.qtd * itemRemovido.valor

    document.getElementById(
      "total"
    ).innerText = `Valor Total: R$ ${this.total.toFixed(2)}`
  }

  calcularTotal() {
    this.total += this.item.valor * this.item.qtd

    document.getElementById(
      "total"
    ).innerText = `Valor Total: R$ ${this.total.toFixed(2)}`
  }

  cancelar() {
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("qtd").value = ""
  }
}

let controladorLista = new ListaController()
