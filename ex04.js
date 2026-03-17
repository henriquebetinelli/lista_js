function ordenarNumerosDecresente() {
    let numeros = [];
    for(let i = 0; i < 4; i++) {
        let numero = parseFloat(prompt("Digite o " + (i + 1) + "° numero:"));
        if(!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, digite um número válido.");
        }
    }
    alert("Numeros em ordem decresente: \n" + numeros.sort((a, b) => b - a).join(', '));
}

ordenarNumerosDecresente()