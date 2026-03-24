function ordenacaoDeNumeros() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero1 > numero2) {
        alert(numero1 + ", " + numero2);
    } else {
        alert(numero2 + ", " + numero1);
    }
}