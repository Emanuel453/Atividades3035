

const cores = ["red", "blue", "green", "orange", "purple", "pink", "yellow", "brown", "teal"];
let contador = 0;

function mudarCor() {
    contador++;
    let indice = contador % cores.length;
    let corEscolhida = cores[indice];

    let caixa = document.getElementById("caixa");
    caixa.style.backgroundColor = corEscolhida;
}