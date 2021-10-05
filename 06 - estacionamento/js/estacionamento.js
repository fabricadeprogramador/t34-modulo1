let carros = []

function lerDados() {
  //Ler os dados
  let modelo = document.getElementById("modelo").value
  let marca = document.getElementById("marca").value
  let ano = document.getElementById("ano").valueAsNumber

  //Colocar os dados em um objeto
  let carroNovo = {}
  carroNovo.modelo = modelo
  carroNovo.marca = marca
  carroNovo.ano = ano

  return carroNovo
}

function validar(carro) {
  if (carro.modelo == "" || carro.marca == "" || isNaN(carro.ano)) {
    return false
  }

  return true
}

function adicionar() {
  //Chama a função lerDados para ler os dados do carro digitados pelo usuário
  //E espera o carro retornado
  let carroNovo = lerDados()

  //Validação para verificar se os campos foram preenchidos ou não
  //Caso todos os campos foram preenchidos validar retorna true
  //Caso contrário, validar retorna false
  let ehValido = validar(carroNovo)

  if (ehValido) {
    //Colocar o objeto no array(carros)
    carros.push(carroNovo)
    //Limpar os campos
    limpar()

    //Imprimir o array
    imprimir()

    alert("Carro adicionado com sucesso!")
  } else {
    alert("Preencha todos os campos!")
  }
}

function classificar() {
  if (carros.length == 0) {
    alert("Nenhum carro cadastrado!")
  } else {
    let somaDosAnos = 0
    let maisVelho = carros[0]
    let maisNovo = carros[0]

    for (let i = 0; i < carros.length; i++) {
      //Variável que irá acumular a soma dos anos de todos os carros
      somaDosAnos = somaDosAnos + carros[i].ano

      //Verificação se o carro da posição i é mais velho do que o da variável "maisVelho"
      if (carros[i].ano < maisVelho.ano) {
        maisVelho = carros[i]
      }

      //Verificação se o carro da posição i é mais novo do que o da variável "maisNovo"
      if (carros[i].ano > maisNovo.ano) {
        maisNovo = carros[i]
      }
    }

    let media = somaDosAnos / carros.length

    //Imprimir o resultado
    document.getElementById("maisNovo").innerText =
      converterParaString(maisNovo)
    document.getElementById("maisVelho").innerText =
      converterParaString(maisVelho)
    document.getElementById("media").innerText = media.toFixed(2)
  }
}

function converterParaString(carro) {
  return `Modelo: ${carro.modelo} - Marca: ${carro.marca} - Ano: ${carro.ano}`
}

function imprimir() {
  //Zerar a lista
  let lista = document.getElementById("lista")
  lista.innerHTML = ""

  //For para percorrer todas as posições do array carros
  for (let i = 0; i < carros.length; i++) {
    inserirNovaLinha(carros[i])
  }
}

function inserirNovaLinha(carro) {
  //"tabela" é o elemento tbody do HTML
  let tabela = document.getElementById("lista")

  let linha = tabela.insertRow()

  let colunaModelo = linha.insertCell()
  let colunaMarca = linha.insertCell()
  let colunaAno = linha.insertCell()

  colunaModelo.innerText = carro.modelo
  colunaMarca.innerText = carro.marca
  colunaAno.innerText = carro.ano
}

function limpar() {
  document.getElementById("modelo").value = ""
  document.getElementById("marca").value = ""
  document.getElementById("ano").value = ""
}
