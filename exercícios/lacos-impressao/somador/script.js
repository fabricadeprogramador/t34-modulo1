let notas = []

function adicionar() {
    let notaDigitada = document.getElementById("nota")
    let nomeDigitado = document.getElementById("nome")
    let idadeDigitada = document.getElementById("idade")

    notas.push({ 
        nome: nomeDigitado.value, // Adicionamos o atributo nome ao objeto
        idade: idadeDigitada.valueAsNumber, // Adicionamos o atributo idade ao objeto
        nota: notaDigitada.valueAsNumber // Adicionamos o atributo nota ao objeto
    })

    notaDigitada.value = ""
    nomeDigitado.value = ""
    idadeDigitada.value = ""
}

function calcularMedia() {
    let resultado = 0

    for(let i = 0; i < notas.length; i++) {
        resultado += notas[i].nota // objeto aluno
    }

    alert(resultado/notas.length)
}