import { navBar } from "../script.js";

const inputText = document.querySelectorAll('.contato-form__item--text');
const enviarForm = document.getElementById('botao-enviar');

enviarForm.addEventListener('click', (e) => {
    e.preventDefault();

    inputText.forEach(elemento => {
        elemento.textContent = "";
    })
})
