import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificaLista } from "./verificaLista.js";

const itemInput = document.getElementById("input-adicionar");
const listaDeCompras = document.getElementById("lista-compras"); 

export function adicionarItem (evento) {
    evento.preventDefault();

    if (itemInput.value !== "" && itemInput.value.trim() !== "") {
        const itemLista = criarItemDaLista(itemInput.value, listaDeCompras);
        listaDeCompras.appendChild(itemLista);
        verificaLista(listaDeCompras);
        itemInput.value = "";
    }
    else {
        itemInput.value = "";
    }
}