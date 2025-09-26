function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.90;
    } else {
        return valorTotal;
    }
}

