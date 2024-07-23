const frutasNome = [
    "Abacaxi",
    "Banana",
    "Cereja",
    "Damasco",
    "Figo",
    "Goiaba",
    "Kiwi",
    "Laranja",
    "Manga",
    "Pera"
];

// se formos fazer c img
const frutasImg = [

]

// serve p duplicar a lista dos nomes (ai temos pares)
let cartas = frutasNome.concat(frutasNome); 


// serve p embaralhar a lista
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // loop do fim da lista ao inicio
        const j = Math.floor(Math.random() * (i + 1)); // aq gera um indice aleatorio (nmr de 0-1 * i +1)
        [array[i], array[j]] = [array[j], array[i]]; // troca os valores de i por j
    }
    return array;
}

// serve p criar o tabuleiro 
function createBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    shuffle(cartas); 
    for (let i = 0; i < cartas.length; i++) {
       
    }
}