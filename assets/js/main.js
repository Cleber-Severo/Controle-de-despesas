const btnAdicionar = document.querySelector('#formulario__adicionar')
const entradaDescricao = document.querySelector('#descricao')
const entradaValor = document.querySelector('#valor')
const lista = document.querySelector('#listaDespesas')

var listaDespesa = [ 
    { id: 0, descricao: 'Rendimentos fundos', valor: 200 },
    { id: 1, descricao: 'Seguro', valor: -190 },
    { id: 2, descricao: 'Salário', valor: 2800 },
    { id: 3, descricao: 'Spotify', valor: -24 }
]

const addTransacao = transacao => {

    const operador = transacao.valor < 0 ? '-' : '+'
    const tipoAddClasse = transacao.valor < 0 ? 'negativo' : 'positivo'
    const valorSemOperador = Math.abs(transacao.valor)
    const itemLista = document.createElement('li')

    itemLista.classList.add(tipoAddClasse)
    itemLista.innerHTML = `
         <span>  ${transacao.descricao} </span> <span>${operador} R$ ${valorSemOperador} </span> 
    `

    lista.append(itemLista)

    //<!--  <span> ${} ${} R$ ${} </span>   -->

    console.log(operador);
}

console.log(listaDespesa);

addTransacao(listaDespesa[1])
addTransacao(listaDespesa[0])
addTransacao(listaDespesa[2])
addTransacao(listaDespesa[3])