class ImpressoraController {
  constructor() {
    this.numeros = []
  }

  adicionar() {
    let numeroDigitado = document.getElementById("numero").value

    this.numeros.push(numeroDigitado)

    alert("Número inserido com sucesso!")

    this.limpar()
    this.imprimir()
  }

  imprimir() {
    let span = document.getElementById("numeros")
    span.innerText = ""

    for (let i = 0; i < this.numeros.length; i++) {
      let stringSalva = document.getElementById("numeros").innerText
      stringSalva = stringSalva + this.numeros[i] + "-"
      span.innerText = stringSalva
    }
  }

  limpar() {
    document.getElementById("numero").value = ""
  }
}

let impressora = new ImpressoraController()
