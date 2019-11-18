const itensCart = document.getElementById('list-itens')
var input = document.querySelector("#addressUser")
const btnCart = document.getElementById('finish')


btnCart.addEventListener('click', function() {
    const address = input.value
    const msg = `Olá, segue abaixo meu pedido: \n${itensCart.innerText}\n\n Para o endereço: ${address}\n\n Obrigado :)`
    const texto = window.encodeURI(msg)

    if(address !== '') window.open(`https://api.whatsapp.com/send?phone=+5586995172761&text=${texto}`) 
    
    alert('Digite o endereço!')
    
})
