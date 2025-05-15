const menuHamburguer = document.querySelector('.cabecalho-top__menu');
const listaMenu = document.querySelector('.cabecalho-navegacao');

menuHamburguer.addEventListener('click', () => {
    listaMenu.classList.toggle('ativo');
})