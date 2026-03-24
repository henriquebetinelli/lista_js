function folhaDePagamento () {
    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
    let descontoINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoINSS;

    alert("Nome: " + nome + "\nSalário Bruto: R$ " + salarioBruto.toFixed(2) + "\nDesconto INSS: R$ " + descontoINSS.toFixed(2) + "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2));
}