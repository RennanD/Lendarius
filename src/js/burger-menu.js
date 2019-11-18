const burgerMenu = document.getElementById('burger-menu')

const links = document.querySelector('.links')
let toggle = false


function toggleMenu(){
    
    toggle = !toggle

    if(toggle) {

        links.classList.add('active')
    }

    if(!toggle) links.classList.remove('active')

}

burgerMenu.addEventListener('click', toggleMenu)