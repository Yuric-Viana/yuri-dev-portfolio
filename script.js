const menuHamburguer = document.querySelector('.cabecalho-top__menu');
const listaMenu = document.querySelector('.cabecalho-navegacao');
const contentHidden = document.querySelectorAll('.hidden');
const link = document.querySelectorAll('.cabecalho-navegacao__list--link');
const liItem = document.querySelectorAll('.navegacao__list--item');
const linkBtn = document.querySelector('.apresentacao__text--link');

liItem.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        let itemEscolhido = e.target.textContent;
        let img = item.querySelector('img');

        if (itemEscolhido.includes('Sobre')) {
            if (img) img.src = 'assets/maleta.png'

        } else if (itemEscolhido.includes('Certificados')) {
            if (img) img.src = 'assets/diploma-svgrepo-com.svg';

        } else if (itemEscolhido.includes('Contato')) {
            if (img) img.src = 'assets/contato-boneco-laranja.png'
        }
    })

    item.addEventListener('mouseleave', (e) => {
        let img = item.querySelector('img');

        if (item.classList.contains('maleta')) {
            if (img) img.src = 'assets/maleta-de-negocios-branca-transparente.png';

        } else if (item.classList.contains('diploma')) {
            if (img) img.src = 'assets/diploma-branco-removebg-preview.png';

        } else if (item.classList.contains('contato--text')) {
            if (img) img.src = 'assets/contato-boneco-branco-removebg-preview.png';
        }
    })
})

function effectPage(e) {
    e.preventDefault();

    document.body.classList.add('no-scroll');
    document.body.classList.add('effect-saida');

    const targetLink = e.currentTarget.href;

    const onTransitionEnd = () => {
        window.location.href = targetLink;
        document.body.removeEventListener('transitionend', onTransitionEnd);
    };

    document.body.addEventListener('transitionend', onTransitionEnd);
}

link.forEach(effect => {
    effect.addEventListener('click', effectPage);
})

if(linkBtn) {
    linkBtn.addEventListener('click', effectPage);
}

let ativo = true;

export function navBar() {
    menuHamburguer.addEventListener('click', (e) => {
        listaMenu.classList.toggle('ativo');

        ativo = !ativo;

        menuHamburguer.src = ativo ? 'assets/icons8-cardápio.svg' : 'assets/close-x-svgrepo-com.svg';

        contentHidden.forEach(hidden => {
            hidden.style.opacity = ativo ? 1 : 0;
        })
    })
}

navBar()

