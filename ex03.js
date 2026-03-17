function balancoFinanceiro() {
    let somaGanhoBruto = 0;
    let somaGastoAnual = 0;
    let saldoFinanceiro = 0;

    for(let i = 0; i < 12; i++) {
        let ganhoBruto = parseFloat(prompt("Digite o ganho bruto do mês: " + (i + 1)));
        if(!isNaN(ganhoBruto)) {
            somaGanhoBruto += ganhoBruto;
        } else {
            alert("Por favor, digite um número válido.");
        }
        let gastoMensal = parseFloat(prompt("Digite o gasto do mês: " + (i + 1)));
        if(!isNaN(gastoMensal)) {
            somaGastoAnual += gastoMensal;
        } else {
            alert("Por favor, digite um número válido.");
        }
    }
    saldoFinanceiro = somaGanhoBruto - somaGastoAnual;
    alert("Ganho bruto anual: " + somaGanhoBruto + "\nGasto Anual: " + somaGastoAnual + "\nSaldo financeiro anual: " + saldoFinanceiro);
}

//balancoFinanceiro()