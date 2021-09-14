class BuscadorController {
  constructor() {
    this.nomes = []
  }

  adicionar() {
    let nomeDigitado = document.getElementById("nome").value

    this.nomes.push(nomeDigitado.toUpperCase())

    alert("Nome inserido com sucesso!")

    this.limpar()
    this.imprimir()
  }

  buscar() {
    let nomeBusca = document.getElementById("nomeBusca").value
    let indiceBuscado = -1

    for (let i = 0; i < this.nomes.length; i++) {
      if (this.nomes[i] == nomeBusca.toUpperCase()) {
        indiceBuscado = i
      }
    }

    if (indiceBuscado == -1) {
      alert("Nome não inserido na lista!")
    } else {
      alert(`O nome buscado ${nomeBusca} está na posição ${indiceBuscado}!`)
    }
  }

  imprimir() {
    let span = document.getElementById("nomes")
    let acumulador = ""

    for (let i = 0; i < this.nomes.length; i++) {
      acumulador += this.nomes[i] + " - "
    }

    span.innerText = acumulador
  }

  limpar() {
    document.getElementById("nome").value = ""
    document.getElementById("nomeBusca").value = ""
  }
}

let buscador = new BuscadorController()
