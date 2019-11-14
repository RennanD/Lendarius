const itensCart = document.getElementById('list-itens')
var input = document.querySelector("#addressUser")
const btnCart = document.getElementById('finish')


btnCart.addEventListener('click', function() {
    const address = input.value
    const msg = `Olá, segue abaixo meu pedido:${itensCart.innerText}\n Para o endereço: ${address}\n Obrigado :)`
    const texto = window.encodeURI(msg)
    window.open(`https://api.whatsapp.com/send?phone=+5586995172761&text=${texto}`)
    
})
