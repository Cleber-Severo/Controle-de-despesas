const selecionar = document.querySelector(".formulario__seleciona")
const btnAdicionar = document.getElementById('formulario__adicionar')
const entradaDescricao = document.getElementById('descricao')
const entradaValor = document.getElementById('valor')
const lista = document.getElementById('lista')

var despesas = []



btnAdicionar.addEventListener('click', (e) => {

    e.preventDefault()


    
    if(selecionar.value == 1) {
        entradaValor.value = entradaValor.value * 1
    } else {
        entradaValor.value = entradaValor.value * -1
    }

    var objeto = {descricao: entradaDescricao.value, valor: entradaValor.value}



    console.log(objeto.descricao, objeto.valor)

  

    
    const item = document.createElement("li")
    var itemDescricao = document.createElement("p")
    itemDescricao = document.createTextNode(objeto.descricao)
    
    var itemValor = document.createElement("p")
    itemValor.classList = "cor"

    itemValor = document.createTextNode(objeto.valor)

  

    item.appendChild(itemDescricao)
    item.appendChild(itemValor)

    lista.appendChild(item)

    
    console.log(itemValor.className)


    entradaDescricao.value = ""
    entradaValor.value = ""

})