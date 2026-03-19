function transformadorDeNumeros() {
    let numero = parseFloat(prompt("Digite um número: "));
    let proxNumero = 0;
    if(numero%2 == 0) {
        proxNumero = numero + 1;
        alert("O numero " + numero + " é par.\nO proximo numero ímpar é: " + proxNumero);
    } else {
        proxNumero = numero + 1;
        alert("O numero " + numero + " é ímpar.\nO proximo numero par é: " + proxNumero);
    }
}