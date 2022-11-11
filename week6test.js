//WAR GAME
//let game play out instantly with no user input
//possible classes: CARD, DECK, PLAYER
//deal 26 cards to 2 players from deck of 52 cards
//player with higher card wins a point (ties in result zero points for both players)
//display score at the end and declare a winner
//write a unit test using mocha and chai for at least one function


//i first created the card suits and values for the cards, as well as setting up an array for each player
const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const playerOnePoints = [];
const playerTwoPoints = [];
let playerSum = 0;
let playerOneDeck, playerTwoDeck;
//map the cards actual values, I kept the 'ACE' card to have a value of 1 in my particular game
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
    pop() {
        return this.cards.shift;
    }
    //this function takes the cards in the deck (52) and iteratres backwards through (i--) them to mix them all into a new array.
    deckShuffle() {
        for (let i = this.cardsInDeck - 1; i > 0; i--) {
            const cardIndex = Math.floor(Math.random() * (i + 1));
            const oldCardIndex = this.cards[cardIndex];
            this.cards[cardIndex] = this.cards[i];
            this.cards[i] = oldCardIndex;
        }
    }
}

//this function takes all the mixed up cards and creates a new deck from them
function newDeck() {
    return SUITS.flatMap(suits => {
        return VALUES.map(values => {
            return new Card(suits, values)
        });
    });
}
//this function takes the points array at the end and adds them up for a final score
// tested this with mocha and chai
function averageArray(array1) {
    playerSum = array1.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }); if (typeof array1 === String || typeof array1 === Boolean) {
        throw new Error('Array1 must be a number');
    }
    return playerSum; //or is this meant to be playerSum?
};



//this card class is necessary for the entire game to work sine it needs to have the values and the suites to make sure there arent multiple cards.
class Card {
    constructor(suits, values) {
        this.suits = suits;
        this.values = values;
    }
}

//this is where the game starts by declaring a new deck and calling the shuffle function
const deck = new Deck();
deck.deckShuffle();
//this portion takes the new deck we made and shuffled and spluts it into two players
const halfDeck = Math.ceil(deck.cardsInDeck / 2);
playerOneDeck = (deck.cards.slice(0, halfDeck));
playerTwoDeck = (deck.cards.slice(halfDeck, deck.cardsInDeck));
//consolde.log(playerOneDeck);

//this loop takes the two shuffled half of the deck and compares the number and values of each card
//by calling the pop function each time it iterates. it also assigns each player a half of the deck which is needed to run the game
//i had to create an add function so the loop will add one point per game won, instead of the card values, which is an issue i was running into.
//I then would push the points value of 1 into the playerPoints array.
function add(value) {
    points += value;
    if (value == 1) {
        points = 1;
    }
}

let points = 1
for (let i = 0; i < 26; i++) {
    const playerOneCard = playerOneDeck.pop();
    const playerTwoCard = playerTwoDeck.pop();
    console.log(`
    Round ${i} Start
    Player One's Card: ${cardValue[playerOneCard.values]}`);
    console.log(`
    Player Two's Card: ${cardValue[playerTwoCard.values]}
    Round ${i} End
    `);
    if (cardValue[playerOneCard.values] > cardValue[playerTwoCard.values]) {
        playerOnePoints.push(points);
        console.log('Player One Wins');
    } else if (cardValue[playerTwoCard.values] > cardValue[playerOneCard.values]) {
        playerTwoPoints.push(points);
        console.log('Player Two Wins');
    } else {
        console.log('Draw, No Points Awarded');
    }
}



// for (let i = 0; i < 26; i++) {
//     const playerOneCard = playerOneDeck.pop();
//     const playerTwoCard = playerTwoDeck.pop();
//     console.log(`
//     Round ${i} Start
//     Player One's Card: ${cardValue[playerOneCard.values]}`);
//     console.log(`
//     Player Two's Card: ${cardValue[playerTwoCard.values]}
//     Round ${i} End
//     `);
//     if (cardValue[playerOneCard.values] > cardValue[playerTwoCard.values]) {
//         playerOnePoints.push(cardValue[playerTwoCard.values], cardValue[playerOneCard.values]);
//         console.log('Player One Wins');
//     } else if (cardValue[playerTwoCard.values] > cardValue[playerOneCard.values]) {
//         playerTwoPoints.push(cardValue[playerTwoCard.values], cardValue[playerOneCard.values]);
//         console.log('Player Two Wins');
//     } else {
//         console.log('Draw, No Points Awarded');
//     }
// }

//trying to redo this loop to add a single point to the score instead of how i have it up above
//where it adds the point values of the cards that are drawn
// playerOnePoints.score = 0;
// playerTwoPoints.score = 0;
// for (let i = 0; i < 26; i++) {
//     const playerOneCard = playerOneDeck.pop();
//     const playerTwoCard = playerTwoDeck.pop();
//     console.log(`
//     Round ${i} Start
//     Player One's Card: ${cardValue[playerOneCard.values]}`);
//     console.log(`
//     Player Two's Card: ${cardValue[playerTwoCard.values]}
//     Round ${i} End
//     `);
//     if (cardValue[playerOneCard.values] > cardValue[playerTwoCard.values]) {
//         playerOnePoints.score++;
//         console.log('Player One Wins');
//     } else if (cardValue[playerTwoCard.values] > cardValue[playerOneCard.values]) {
//         playerTwoPoints.score++;
//         console.log('Player Two Wins');
//     } else {
//         console.log('Draw, No Points Awarded');
//     }
// }


//i created the final score board by console.log with tmeperal literaltes to show the final score between the two players
console.log(`FINAL SCORE
Player One's Total: ${averageArray(playerOnePoints)}
Player Two's Total: ${averageArray(playerTwoPoints)}`);

//i then used this loop is to show which player won the game overall after seeing the final score board with the tallied points in the end,
// console.log temperal literaltes to write out who won!
let playerOneTotalSum = averageArray(playerOnePoints);
let playerTwoTotalSum = averageArray(playerTwoPoints);
if (playerOneTotalSum > playerTwoTotalSum) {
    console.log(` End Game
    Player One is the WINNER with ${playerOneTotalSum} Points!!`);
} else if (playerTwoTotalSum > playerOneTotalSum) {
    console.log(` End Game
    Player Two is the WINNER with ${playerTwoTotalSum} Points!!`);
} else {
    console.log(`The Game Ended in a Draw!!`);
}


//things working
//delcaring winner right per round
//correct amount of rounds

//issues
//not adding points up in the end
//its adding the scores of the cards, i need one point added per win******

//still to do
//mocha and chai testing
