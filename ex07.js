function mostrarPrecos() {
    const picoles = [
        {codigo: "a", sabor: "Chocolate", preco: 1.50},
        {codigo: "b", sabor: "Morango", preco: 2.50},
        {codigo: "c", sabor: "Creme", preco: 2.50},
        {codigo: "d", sabor: "Manga", preco: 3.20},
        {codigo: "e", sabor: "Melancia", preco: 3.40},
        {codigo: "f", sabor: "Vanilla Ice", preco: 3.00},
        {codigo: "g", sabor: "Céu Azul", preco: 3.60},
        {codigo: "h", sabor: "Brownie", preco: 4.00},
        {codigo: "i", sabor: "Hawaiano", preco: 5.00}
    ];
    let codigoPicole =  prompt("Digite o código para consultar:");
    let picole = picoles.find(picole => picole.codigo == codigoPicole);
    if(picole) {
        alert("Dados do Picole: \nSabor: " + picole.sabor + "\nPreço: " + picole.preco);
    } else {
        alert("Digite um código para consultar.");
    }
}