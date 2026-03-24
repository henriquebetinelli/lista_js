function operacoesDeNumeros() {
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));;
    let numero2 = parseFloat(prompt("Digite o segundo número: "));;
    let diferenca = numero1 - numero2;
    let resultado = (2 * numero1) + (3 * numero2);
    let multiplicacao = numero1 * numero2;

    alert("Diferença: " + diferenca + "\nDobro da primeira + triplo da segunda: " + resultado + "\nMultiplicação: " + multiplicacao);
}