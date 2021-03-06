const ul = document.querySelector('#list-burgers')
const itens = document.querySelector('#list-itens')
const valor = document.querySelector('#valor')
let cart = []

const burgers = [
    {
        id: 1,
        name: "Classic Tast",
        preco: 16,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial e queijo prato"
    },
    {   
        id: 2,
        name: "Magic Salad",
        preco: 18,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, queijo prato, alface, tomate e picles"
    },
    {
        id: 3,
        name: "Cheese Bacon",
        preco: 21,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, 2 x cheddar e bacon crocante"
    },
    {
        id: 4,
        name: "American King",
        preco: 22,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, cheddar, alface, tomate, picles e crispy de bacon"
    },
    {
        id: 5,
        name: "Onion Crispy",
        preco: 23,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, queijo prato, alface, tomate, picles, crispy de cebola e crispy de bacon"
    },
    
]

ul.innerHTML = burgers.map(burger => {
    
    const id = Math.random()

    const data =
        `
        <li>
            <header>
                <strong>${burger.name}</strong>
                <p id ="${id}">0</p>
                <span>R$ ${burger.preco}</span>
            </header>
            <main>
                <p>${burger.ingredientes}</p>
                <div>
                    <button onClick = "removeQTY(${id}, 1)" class = "remove"> - </button>
                    <button onClick = "addQTY(${id}, 1)" class = "added"> +</button>
                </div>
            </main>
            <footer>
                <button id = "add" onClick = "addBurger(${id},'${burger.name}', ${burger.preco})">Adicionar ao carrinho</button>
            </footer>
        </li>
            
                    
        `
        
    return data
}).join('')


function addQTY(id ,value) {
    
    let p = document.getElementById(id)

    let number = parseFloat(p.textContent)
    
    
    let sum = number += value 
    
    p.innerHTML = sum
    
}

function removeQTY(id, value) {
    let p = document.getElementById(id)

    let number = parseFloat(p.textContent)
    
    let sum = number -= value 
    
    if(sum < 0) return

    p.innerHTML = sum
}

function addBurger(id, name, preco) {

    const p = document.getElementById(id)

    const quantidade = parseFloat(p.textContent)    

    if(quantidade < 1 ) return alert('Peça pelo menos um hamburguer')


    cart.push({
        quantidade,
        name,
        preco: quantidade * preco,
    })

    
    itens.innerHTML = cart.map(product => (`<li> - ${product.quantidade} x ${product.name}</li>`)).join('')

    const total = cart.reduce(function(total, precoItem){
        return total + precoItem.preco;
        
    },0)


    valor.innerHTML = `<p>Valor total: R$ ${total}</p>`
    p.innerHTML = 0

    alert('Produto adicionado ao a carrinho')
}
    





