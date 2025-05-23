import { navBar } from "../script.js";

const ulSugestoes = document.querySelector('.main-sugestoes__list');
const btnEnviar = document.querySelector('.main-sugestoes__btn');
const inputList = document.querySelector('.main-sugestoes__input');
const formLista = document.querySelector('.main-sugestoes__form');

const sugestao = JSON.parse(localStorage.getItem('sugestao')) || [];

function salvarItem() {
    localStorage.setItem('sugestao', JSON.stringify(sugestao));
}

function criarSugestao(descricao) {
    const listaItem = document.createElement('li');
    listaItem.classList.add('sugestoes__list--item');

    const paragrafo = document.createElement('p');
    paragrafo.textContent = descricao;
    
    const icons = document.createElement('span');
    icons.classList.add('list--item__icons');

    const imgDelete = document.createElement('img');
    imgDelete.id = 'delete';
    imgDelete.src = 'assets/delete.png'; 

    const imgEdite = document.createElement('img');
    imgEdite.src = 'assets/edit.png';

    icons.append(imgDelete);
    icons.append(imgEdite);

    listaItem.append(paragrafo);
    listaItem.append(icons);

    return listaItem;
}

formLista.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputList.value == '') {
        alert('Deve ser inserido uma sugestão!');
        return;
    }

    const sugestaoInformada = {
        descricao: inputList.value
    }

    sugestao.push(sugestaoInformada);

    const criarItemSugestao = criarSugestao(sugestaoInformada.descricao);
    ulSugestoes.append(criarItemSugestao);

    salvarItem();
})

sugestao.forEach(item => {
    const elementoSugest = criarSugestao(item.descricao);
    ulSugestoes.append(elementoSugest);
})

let divSlide = document.querySelectorAll('.main-btn');
let cont = 1;

document.getElementById('radio1').checked = true; 

divSlide.forEach(elemento => {
    elemento.addEventListener('click', function() {
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

    if(cont > 3) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
}

