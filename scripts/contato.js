import { navBar } from "../script.js";

const inputText = document.querySelectorAll('.contato-form__item--text');
const enviarForm = document.getElementById('botao-enviar');

enviarForm.addEventListener('click', () => {
    inputText.forEach(elemento => {
        elemento.textContent = "";
    })
})