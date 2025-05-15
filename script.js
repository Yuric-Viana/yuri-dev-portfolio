const menuHamburguer = document.querySelector('.cabecalho-top__menu');
const listaMenu = document.querySelector('.cabecalho-navegacao');
const contentHidden = document.querySelector('.hidden');

let ativo = true;

menuHamburguer.addEventListener('click', () => {
    listaMenu.classList.toggle('ativo');

    ativo = !ativo;

    contentHidden.style.opacity = ativo ? 1 : 0;
})