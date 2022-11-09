class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this.totalPoints = 0;
    }
}

//shuffle

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

const cardValue = {
    'K': 13,
    'Q': 12,
    'J': 11,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    'A': 1
}

//deck class in which to make a new deck with cards
class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get cardsInDeck() {
        return this.cards.length;
    }

    //pop function lets each card pop off the top to compare with the other players cards
}

const mainDeck = []
console.log('New Deck of Cards: ' + mainDeck);
console.log('-----------------');

//dealing cards

const player1 = new Player('Player 1'. []);
player1.deck = mainDeck.slice(0, 26);

const player2 = new Player('Player 2', []);
player2.deck = mainDeck.slice(26, 52);

console.log('Player One Deck: ' + player1.deck);
console.log('Player Two Deck: ', + player2.deck);
console.log('-------------------');

//comparing cards

playerOneCard = 0;
playerTwoCard = 0;
player1.score = 0;
player2.score = 0;

{
    for (let i = 0; i < player1.deck.length; i++) {

    }
}

//https://www.youtube.com/watch?v=bPbeCZtcgyo