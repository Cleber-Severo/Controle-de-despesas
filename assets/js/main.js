const selecionar = document.querySelector(".formulario__seleciona")
const btnAdicionar = document.querySelector('#formulario__adicionar')
const entradaDescricao = document.querySelector('#descricao')
const entradaValor = document.querySelector('#valor')
const lista = document.querySelector('#lista')

var listaDespesa = [ 
    { id: 0, descricao: 'Rendimentos fundos', valor: 200 },
    { id: 1, descricao: 'Seguro', valor: -190 },
    { id: 2, descricao: 'Salário', valor: 2800 },
    { id: 3, descricao: 'Spotify', valor: -24 }
]

const addTransacao = transacao => {

    const operador = transacao.valor < 0 ? '-' : '+'

    //<!--  <span> ${} ${} R$ ${} </span>   -->

    console.log(operador);
}

console.log(listaDespesa);

addTransacao(listaDespesa[3])