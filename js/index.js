import {
    exportString
} from './convert';

const text = document.querySelector("p.form");
text.textContent = exportString();