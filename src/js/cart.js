const ul = document.querySelector('#list-burgers')
let soma = 0


const burgers = [
    {
        name: "Classic Tast",
        preco: 16,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial e queijo prato"
    },
    {
        name: "Magic Salad",
        preco: 18,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, queijo prato, alface, tomate e picles"
    },
    {
        name: "Cheese Bacon",
        preco: 21,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, 2 x cheddar e bacon crocante"
    },
    {
        name: "American King",
        preco: 22,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, cheddar, alface, tomate, picles e crispy de bacon"
    },
    {
        name: "Onion Crispy",
        preco: 23,
        ingredientes: "Pão de brioche, hambúrguer 160g, molho especial, queijo prato, alface, tomate, picles, crispy de cebola e crispy de bacon"
    },
    
]

ul.innerHTML = burgers.map(burger => {
    return (
        `
        <li>
            <footer>
                <strong>${burger.name} R$${burger.preco}</strong>
                <p>${burger.ingredientes}</p>
            </footer>
        </li>
                    
        ` )
}).join('')

