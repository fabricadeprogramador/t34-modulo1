let qtdAprovados = 0
let qtdReprovados = 0

function verificarSituacao() {
  let nota1 = document.getElementById("n1")
  let nota2 = document.getElementById("n2")
  let nota3 = document.getElementById("n3")

  if (nota1 == "" || nota2 == "" || nota3 == "") {
    alert("Preencha todas as notas!")
  } else {
    let spanResultado = document.getElementById("situacao")
    let spanReprovados = document.getElementById("qtdReprovados")
    let spanAprovados = document.getElementById("qtdAprovados")

    let n1 = parseFloat(nota1.value)
    let n2 = parseFloat(nota2.value)
    let n3 = parseFloat(nota3.value)

    limparCampos()

    let media = (n1 + n2 + n3) / 3

    if (media >= 7) {
      //APROVADO
      qtdAprovados++
      spanAprovados.innerText = "Quantidade de Aprovados: " + qtdAprovados
      spanResultado.innerText = "APROVADO"
      spanResultado.style = "color:green"
    } else if (media >= 4 && media < 7) {
      //PROVA FINAL
      spanResultado.innerText = "PROVA FINAL"
      spanResultado.style = "color: rgb(212, 212, 3)"
    } else if (media < 4 && media > 0) {
      //REPROVADO
      qtdReprovados++
      spanReprovados.innerText = "Quantidade de Reprovados: " + qtdReprovados
      spanResultado.innerText = "REPROVADO"
      spanResultado.style = "color:red"
    } else {
      alert("Notas devem ser maiores que zero!")
    }
  }
}

function limparCampos() {
  document.getElementById("n1").value = ""
  document.getElementById("n2").value = ""
  document.getElementById("n3").value = ""
}
