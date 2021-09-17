class GerenciadorNotas {
  constructor() {
    this.notas = []
  }

  adicionar() {
    let nota = document.getElementById("nota").valueAsNumber

    this.notas.push(nota)
    this.gerarLista()
  }

  gerarLista() {
    let lista = document.getElementById("listaNotas")
    lista.innerText = ""

    for (let i = 0; i < this.notas.length; i++) {
      let notaAtual = this.notas[i]

      let itemNovo = document.createElement("li")
      itemNovo.innerText = notaAtual

      lista.appendChild(itemNovo)
    }
  }

  classificar() {
    let maior = this.notas[0]
    let menor = this.notas[0]
    let media = 0

    for (let i = 0; i < this.notas.length; i++) {
      media = media + this.notas[i]

      if (this.notas[i] > maior) {
        maior = this.notas[i]
      }

      if (this.notas[i] < menor) {
        menor = this.notas[i]
      }
    }

    media = media / this.notas.length

    document.getElementById("maior").innerText = maior
    document.getElementById("menor").innerText = menor
    document.getElementById("media").innerText = media
  }
}

let gerenciador = new GerenciadorNotas()
