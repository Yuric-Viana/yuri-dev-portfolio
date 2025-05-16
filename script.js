const menuHamburguer = document.querySelector('.cabecalho-top__menu');
const listaMenu = document.querySelector('.cabecalho-navegacao');
const contentHidden = document.querySelectorAll('.hidden');

let ativo = true;

menuHamburguer.addEventListener('click', () => {
    listaMenu.classList.toggle('ativo');

    ativo = !ativo;

    menuHamburguer.src = ativo ? 'assets/icons8-cardápio.svg' : 'assets/close-x-svgrepo-com.svg';

    contentHidden.forEach(hidden => {
        hidden.style.opacity = ativo ? 1 : 0;
    })
    
})