const selecionar = document.querySelector(".formulario__seleciona")
const btnAdicionar = document.getElementById('formulario__adicionar')




btnAdicionar.addEventListener('click', (e) => {

    e.preventDefault()

    
    if(selecionar.value == 1) {
        console.log("é positivo")
    } else {
        console.log("é negativo")
    }

    

})