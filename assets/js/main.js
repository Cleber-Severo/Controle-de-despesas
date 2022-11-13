const btnAdicionar = document.querySelector('#formulario__adicionar')
const entradaDescricao = document.querySelector('#descricao')
const entradaValor = document.querySelector('#valor')
const mostraSaldo = document.querySelector('.saldo__valor')
const mostraRenda = document.querySelector('.renda__valor')
const mostraGastos = document.querySelector('.gastos__valor')
const lista = document.querySelector('#listaDespesas')


var listaDespesa = [ ]

//função para adicionar transações
const addTransacao = transacao => {

    const operador = transacao.valor < 0 ? '-' : '+'                    //testa se é menor ou maior que zero e atribui um sinal
    const tipoAddClasse = transacao.valor < 0 ? 'negativo' : 'positivo' //faz o mesmo teste para os nomes de variaveis
    const valorSemOperador = Math.abs(transacao.valor)                  //recebe apenas o valor absoluto para evitar conflitos
    const itemLista = document.createElement('li')                      

    itemLista.classList.add(tipoAddClasse)
    itemLista.innerHTML = `
         <span>  ${transacao.descricao} </span> <span>${operador} R$ ${valorSemOperador} </span> 
    ` 

    lista.append(itemLista)
}

//função para atualizar e mostrar na tela a soma dos valores de saldo, renda e gastos
const atualizaValores = () => {
    const listaValores = listaDespesa
        .map(despesa => despesa.valor)
    const saldoTotal = listaValores
        .reduce((acumulador, item) => acumulador + item, 0)
        .toFixed(2)
    const gastosTotal = Math.abs(listaValores
        .filter((item) => item < 0)
        .reduce((acumulador, item) => acumulador + item, 0))
        .toFixed(2)
    const rendaTotal = listaValores
        .filter((item) => item > 0)
        .reduce((acumulador, item) => acumulador + item, 0)
        .toFixed(2)

    mostraSaldo.textContent = `R$ ${saldoTotal}`
    mostraRenda.textContent = `R$ ${rendaTotal}`
    mostraGastos.textContent = `R$ ${gastosTotal}`


}

//função para inicializar o programa
const inicializa = () => {

    lista.innerHTML = ''
    listaDespesa.forEach(addTransacao) //para cada elemento da lista, chamar a função e adicionar o item a pagina 
    
    atualizaValores()
}

inicializa()

//evento ao pressionar o botão de adicionar
btnAdicionar.addEventListener('click', event => {
   
    event.preventDefault() //previne que a pagina recarregue

    //atribuição de variaveis para o que esttá sendo inserido nos inputs
    const transacaoDescricao = entradaDescricao.value.trim()
    const transacaoValor = entradaValor.value.trim()

    //testa se os inputs estão vazios e gera um aviso
    if (transacaoDescricao === '' || transacaoValor === '') {
        alert('Por favor, preencha descrição e valor!')
        return
    } else if (isNaN(transacaoValor)) {
        alert('Inserir somente numeros aos valores das transações')
        return
    }


    //cria o objeto que recebe as informações dos inputs
    var transacao = { 
        
        descricao: transacaoDescricao, 
        valor: Number(transacaoValor)
    }

    //adiciona as informações no inicio do array e chama a função que cria o item da lista a ser mostrado na tela  
    listaDespesa.unshift(transacao)
    inicializa()

    //limpa o valor dos inputs
    entradaDescricao.value = ''
    entradaValor.value = ''
})