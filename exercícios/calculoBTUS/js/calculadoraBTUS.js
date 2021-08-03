function calcularBTUS() {
  let totalMetros = document.getElementById("totalArea").value
  let totalPessoas = document.getElementById("totalPessoas").value
  let totalEletro = document.getElementById("totalEletro").value

  if (totalMetros == "" || totalPessoas == "" || totalEletro == "") {
    alert("Preencha todos os campos!")
  } else {
    let metrosConvertidos = parseFloat(totalMetros)
    let pessoasConvertidos = parseInt(totalPessoas)
    let eletroConvertidos = parseInt(totalEletro)

    totalBTUS =
      metrosConvertidos * 600 +
      eletroConvertidos * 600 +
      (pessoasConvertidos - 1) * 600

    document.getElementById(
      "total"
    ).innerText = `É necessário um total de ${totalBTUS} BTUS neste cômodo!`
  }
}
