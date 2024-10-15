import { formatarData } from "./formatarData.js";

export const editarItem = (elemento, data) => {
    let novoNome = prompt("Digite o novo nome do item:");

    if (novoNome !== null && novoNome.trim() !== "") {
        elemento.textContent = novoNome;
        data.textContent = formatarData(new Date());
    }
}