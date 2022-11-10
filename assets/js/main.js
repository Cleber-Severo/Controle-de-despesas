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

    lista.innerHTML += `

        <li class="lista__despesas"> 
            <span class="item__despesas"> Descricao:  ${objeto.descricao}</span>
            <span class="item__despesas"> Valor:  ${objeto.valor}</span> 
        </li>
    
    `
    var listaDespesa = document.querySelector(".lista__despesas")
    
    listaDespesa.classList.add('positivo') 

   
    
    

    entradaDescricao.value = ''
    entradaValor.value = ''

      /*
    const item = document.createElement("li")
    var itemDescricao = document.createElement("p")
    itemDescricao = document.createTextNode(objeto.descricao)
    
    var itemValor = document.createElement("p")
    itemValor.classList = "cor"

    itemValor = document.createTextNode(objeto.valor)

    
    item.appendChild(itemDescricao)
    item.appendChild(itemValor)

    lista.appendChild(item)

    */

})