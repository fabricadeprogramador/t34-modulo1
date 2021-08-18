//Definição da classe
class ConvidadoController {
  /**
   * Método construtor - chamado toda vez que um
   * objeto desta classe vai ser construído
   * OBS.: Todos os atributos (características do objeto)
   * devem ser definidos no construtor
   */
  constructor() {
    this.contador = 1 //Contador usado para setar os novos IDs
    this.idEdicao = -1 //Flag de edição
    this.convidado = {} //Cria um objeto vazio que vai conter o convidado atual
  }

  /**
   * Invoca o lerDados para setar as variáveis globais,
   * verifica a flag de edição (idEdicao == -1 => Não Edição, idEdicao != -1 => Edição)
   * Em caso de edição, chama a função confirmar Edição
   * Em caso de novo elemento, chama a função para adicionar novo elemento a lista
   * Por final, limpa os campos e reseta a flag
   */
  salvar() {
    this.lerDados()

    if (this.idEdicao == -1) {
      //Insere elemento novo
      adicionarALista()
    } else {
      //Edita elemento da lista
      this.confirmarEdicao()
    }

    this.limparCampos()
  }

  /**
   * Lê os dados dos inputs e coloca nas variáveis globais nomeAtual, idadeAtual e sexoAtual
   * ou exibe alerta em caso de não preenchimento dos campos
   */
  lerDados() {
    this.convidado.nome = document.getElementById("inputConvidado").value
    this.convidado.idade = document.getElementById("inputIdade").value

    let elementoRadio = document.querySelector("[type=radio]:checked")

    if (
      this.convidado.nome != "" &&
      this.convidado.idade != "" &&
      elementoRadio != null
    ) {
      this.convidado.sexo = elementoRadio.value
    } else {
      alert("Preencha o nome do convidado!")
    }
  }

  /**
   * Apenas chama a função para adicionar novo elemento na lista
   */
  adicionarALista() {
    this.inserirLinha()
  }

  /**
   * Cria uma nova linha contendo as informações lidas e insere na tabela
   */
  inserirLinha() {
    //Iniciando algoritmo de inserção da linha na tabela

    //Busca o elemento tBody da tabela
    let tabela = document.getElementById("tabela")

    //Cria um elemento de linha da tabela (tr)
    let linha = document.createElement("tr")

    //Cria 3 colunas para a tabela (td)
    let colunaNome = document.createElement("td")
    let colunaIdade = document.createElement("td")
    let colunaSexo = document.createElement("td")
    let colunaBotaoDeletar = document.createElement("td")
    let colunaBotaoEditar = document.createElement("td")

    //Inserindo os valores dos campos nas respectivas colunas
    colunaNome.innerText = this.convidado.nome
    colunaIdade.innerText = this.convidado.idade
    colunaSexo.innerText = this.convidado.sexo

    //Criando icone de deletar
    let botaoDeletar = document.createElement("img")
    let botaoEditar = document.createElement("img")

    //Setar o src da imagem
    botaoDeletar.src = "img/delete.png"
    botaoEditar.src = "img/edit.svg"

    //Setar onclick do botão deletar
    botaoDeletar.setAttribute("onclick", `deletarLinha('${this.contador}')`)
    botaoEditar.setAttribute("onclick", `prepararEdicao('${this.contador}')`)

    //Colocar o botão como filho da linha
    colunaBotaoDeletar.appendChild(botaoDeletar)
    colunaBotaoEditar.appendChild(botaoEditar)

    //Colocar as colunas como filhas da linha
    linha.appendChild(colunaNome)
    linha.appendChild(colunaIdade)
    linha.appendChild(colunaSexo)
    linha.appendChild(colunaBotaoDeletar)
    linha.appendChild(colunaBotaoEditar)

    //Criar ID para a linha
    linha.id = this.contador

    //Incrementar o contador
    this.contador++

    //Colocar a linha como filha da tabela(tBody)
    tabela.appendChild(linha)
  }

  /**
   * Pede confirmação para o usuário e em caso positivo, remove a linha inteir a da tabela
   */
  deletarLinha(id) {
    if (confirm("Tem certeza que deseja deletar este item?")) {
      document.getElementById(id).remove()
    }
  }

  /**
   * Prepara a tela para a edição, inserindo os valores de nome, idade e sexo, da linha clicada
   * nos inputs para edição
   * Também seta a flag (idEdicao recebe o id da linha), indicando futura edição
   * para a função salvar
   */
  prepararEdicao(id) {
    this.idEdicao = id

    document.getElementById("inputConvidado").value = this.convidado.nome
    document.getElementById("inputIdade").value = this.convidado.idade

    if (this.convidado.sexo == "M") {
      document.getElementById("inputMasc").checked = true
    } else {
      document.getElementById("inputFem").checked = true
    }
  }

  /**
   * Busca o elemento da linha clicada (TR) para edição (id == idEdicao)
   * Encontra os elementos filhos (TDs) da linha
   * Seta as informações lidas dos inputs, anteriormente setadas nas variáveis globais
   * nos respectivos elementos filhos
   */
  confirmarEdicao() {
    let linhaEditar = document.getElementById(this.idEdicao)

    linhaEditar.children[0].textContent = this.convidado.nome
    linhaEditar.children[1].textContent = this.convidado.idade
    linhaEditar.children[2].textContent = this.convidado.sexo

    this.idEdicao = -1
  }

  /**
   * Reseta os inputs e reseta a flag de edição (idEdicao volta para -1)
   */
  limparCampos() {
    document.getElementById("inputConvidado").value = ""
    document.getElementById("inputIdade").value = ""
    document.getElementById("inputFem").checked = false
    document.getElementById("inputMasc").checked = false

    this.idEdicao = -1
  }
}

let controller = new ConvidadoController()
