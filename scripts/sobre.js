import { navBar } from "../script.js";

const ulSugestoes = document.querySelector('.main-sugestoes__list');
const inputList = document.querySelector('.main-sugestoes__text--area');
const formLista = document.querySelector('.main-sugestoes__form');

const sugestao = JSON.parse(localStorage.getItem('sugestao')) || [];

function salvarItem() {
    localStorage.setItem('sugestao', JSON.stringify(sugestao));
}

function criarSugestao(item) {
    const listaItem = document.createElement('li');
    listaItem.classList.add('sugestoes__list--item');

    const paragrafo = document.createElement('p');
    paragrafo.textContent = item.descricao;

    const icons = document.createElement('span');
    icons.classList.add('list--item__icons');

    const imgDelete = document.createElement('img');
    imgDelete.classList.add('delete');
    imgDelete.src = 'assets/delete.png';

    const imgEdite = document.createElement('img');
    imgEdite.src = 'assets/edit.png';
    imgEdite.classList.add('edite');

    imgEdite.onclick = (event) => {
        event.stopPropagation();
        let novaDescricao;

        do {
            novaDescricao = prompt('Qual a nova sugestão?');

            if (novaDescricao == null) return;

            novaDescricao = novaDescricao.trim();

            if (novaDescricao == '') {
                alert('Uma nova sugestão deve ser dada!');
            }
        } while (novaDescricao == '');

        paragrafo.textContent = novaDescricao;
        item.descricao = novaDescricao;
        salvarItem();
    }

    icons.append(imgDelete);
    icons.append(imgEdite);

    listaItem.append(paragrafo);
    listaItem.append(icons);

    const id = Date.now().toString();
    listaItem.setAttribute('data-id', id);

    imgDelete.addEventListener('click', () => {
        listaItem.remove();

        const index = sugestao.indexOf(item);
        if (index > -1) {
            sugestao.splice(index, 1);
        }

        salvarItem();
    })

    return listaItem;
}

formLista.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputList.value == '') {
        alert('Deve ser inserido uma sugestão!');
        return;
    }

    const sugestaoInformada = {
        descricao: inputList.value
    }

    sugestao.push(sugestaoInformada);

    const criarItemSugestao = criarSugestao(sugestaoInformada);
    ulSugestoes.append(criarItemSugestao);

    salvarItem();

    inputList.value = '';
})

sugestao.forEach(item => {
    const elementoSugest = criarSugestao(item);
    ulSugestoes.append(elementoSugest);
})

let divSlide = document.querySelectorAll('.main-btn');
let cont = 1;

document.getElementById('radio1').checked = true;

divSlide.forEach(elemento => {
    elemento.addEventListener('click', function () {
        cont = this.id.replace('radio', '');
        this.checked = true;

        setTimeout(() => {
            elemento.computedStyleMap.backgroundColor = "#c14a27";
        }, 100)
    });
});

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;

    if (cont > 3) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
}

