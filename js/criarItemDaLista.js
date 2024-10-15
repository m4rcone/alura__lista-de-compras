import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { formatarData } from "./formatarData.js";
import { verificaLista } from "./verificaLista.js";
import { verificaListaComprados } from "./verificaListaComprados.js";


const listaComprados = document.getElementById("lista-comprados");
let quantidadeItemNaLista = 0;

export function criarItemDaLista(itemInput, listaDeCompras) {
    quantidadeItemNaLista ++;
    const itemLista = document.createElement("li");
    itemLista.classList.add("lista-compras__item");
    
    const itemListaContainer = document.createElement("div");
    itemListaContainer.classList.add("item__container");
    itemLista.appendChild(itemListaContainer);

    const checkboxConteudo = document.createElement("div");
    checkboxConteudo.classList.add("checkbox__conteudo");
    itemListaContainer.appendChild(checkboxConteudo);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-custom");
    checkboxConteudo.appendChild(checkboxCustomizado);

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", `checkbox-${quantidadeItemNaLista}`);
    checkboxCustomizado.appendChild(checkboxLabel);

    const checkboxInput = document.createElement("input");
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.type = "checkbox";
    checkboxInput.id = `checkbox-${quantidadeItemNaLista}`;
    checkboxLabel.appendChild(checkboxInput);

    const checkboxInputCustomizado = document.createElement("div");
    checkboxInputCustomizado.classList.add("input-checkbox-custom");
    checkboxLabel.appendChild(checkboxInputCustomizado);

    const itemTexto = document.createElement("p");
    itemTexto.classList.add("item__texto");
    itemTexto.innerHTML = itemInput;
    checkboxConteudo.appendChild(itemTexto);

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("item__botoes");
    itemListaContainer.appendChild(containerBotoes);

    const botaoRemover = document.createElement("img");
    botaoRemover.classList.add("botao__img");
    botaoRemover.src = "img/delete-dark.svg";
    botaoRemover.alt = "Deletar item";
    containerBotoes.appendChild(botaoRemover);

    botaoRemover.addEventListener("click", () => {
        excluirItem(itemLista, itemTexto.textContent);
    })

    const botaoEditar = document.createElement("img");
    botaoEditar.classList.add("botao__img");
    botaoEditar.src = "img/edit-dark.svg";
    botaoEditar.alt = "Editar item";
    containerBotoes.appendChild(botaoEditar);

    botaoEditar.addEventListener("click", () => {
        editarItem(itemTexto, textoData);
    })

    const textoData = document.createElement("p");
    textoData.classList.add("item__data");
    itemLista.appendChild(textoData);
    textoData.innerHTML = formatarData(new Date());

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".input-checkbox-custom");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            listaComprados.appendChild(itemLista);
            itemTexto.style.textDecoration = "line-through";
            
        } else {
            checkboxCustomizado.classList.remove("checked");
            listaDeCompras.appendChild(itemLista);
            itemTexto.style.textDecoration = "none";
        }
        verificaLista(listaDeCompras);
        verificaListaComprados(listaComprados);
    });
    return itemLista;
}