import { navBar } from "../script.js";

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

