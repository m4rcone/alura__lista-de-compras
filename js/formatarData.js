export function formatarData(data) {
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });
    const dataCompleta = data.toLocaleDateString('pt-BR');
    const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const dataFormatada = `${diaSemana} (${dataCompleta}) às ${hora}`;
    return dataFormatada;
}