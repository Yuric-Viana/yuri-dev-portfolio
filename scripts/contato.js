import { navBar } from "../script.js";

const inputs = document.querySelectorAll('.contato-form__item--text');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('ativo');
    });
});