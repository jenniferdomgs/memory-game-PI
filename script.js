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

// serve p duplicar a lista dos nomes (ai temos pares)
let cartas = frutasNome.concat(frutasNome); 

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

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
    const gameBoard = document.getElementById('gameBoard'); // pega onde vamos fazer o tabuleiro
    gameBoard.innerHTML = ''; // limpa o tabuleiro
    shuffle(cartas); // embaralhando as cartas
    for (let i = 0; i < cartas.length; i++) {
        const card = document.createElement('div'); // criando as divs das cartas
        card.classList.add('card'); // p colocar classe na div
        card.dataset.name = cartas[i]; // p guardar os nomes das frutas
        card.addEventListener('click', flipCard); // chama a função quando clicar na carta
        gameBoard.appendChild(card); // add as cartas no tabuleiro (1 por 1)
    }
}

function flipCard() {
    if (lockBoard) return; // enquanto as cartas tão desvirando, n dá p virar outra
    if (this === firstCard) return; // se a carta virada for clicada dnv (nada acontece)

    this.classList.add('flipped'); // add classe p poder mexer no css
    this.textContent = this.dataset.name; // colocando o nome da fruta como conteúdo

    if (!hasFlippedCard) { // aacontece qndo nenhuma carta foi clicada ainda
        hasFlippedCard = true;
        firstCard = this; // guarda a carta atual clicada
        return; 
    }

    secondCard = this; // guarda a segunda carta clicada
    checkForMatch(); // chama a função p ver se as cartas é um par
}


document.addEventListener('DOMContentLoaded', createBoard); // cria o tabueleiro quando a pag é carregada