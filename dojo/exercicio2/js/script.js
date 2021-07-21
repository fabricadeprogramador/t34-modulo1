function maiorDosTres() {
  var numero1 = document.getElementById("numero1").value
  var numero2 = document.getElementById("numero2").value
  var numero3 = document.getElementById("numero3").value

  var n1 = parseFloat(numero1)
  var n2 = parseFloat(numero2)
  var n3 = parseFloat(numero3)

  if (n1 > n2) {
    if (n1 > n3) {
      alert("O maior número é: " + n1)
    } else {
      alert("O maior número é: " + n3)
    }
  } else if (n2 > n3) {
    alert("O maior número é: " + n2)
  } else {
    alert("O maior número é: " + n3)
  }
}
