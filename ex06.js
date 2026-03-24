function verificarConsoante() {
    let letra =  prompt("Digite uma letra:");
    const vogais = ["a", "e", "i", "o", "u"];
    if(!/[a-z]/.test(letra)) {
        alert("Por favor, digite apenas uma letra válida.");
    } else if(vogais.includes(letra)) {
        alert("É uma vogal");
    } else {
        alert("É uma consoante");
    }
}