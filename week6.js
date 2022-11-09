//Coding Steps:
// •	For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
// o	You do not need to do anything special when there is a tie in a round.
// •	Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
// o	You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser’s console.
// The completed project should, when executed, do the following:
// •	Deal 26 Cards to each Player from a Deck of 52 cards.
// •	Iterate through the turns where each Player plays a Card.
// •	The Player who played the higher card is awarded a point
// o	Ties result in zero points for both Players
// •	After all cards have been played, display the score and declare the winner.
// •	Write a Unit Test using Mocha and Chai for at least one of the functions you write.


const SUITS = ['Club', 'Spade', 'Diamonds', 'Hearts']
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const playerOnePoints= [];
const playerTwoPoints= [];
let playerSum = 0;

class Deck {
    constructor(cards=deckShuffled() {
        this.cards = cards
    })
    get numberOfCards() {
        return this.cards.length
    }
    pop() {
        return this.cards.shift()
    }
    push(card){
        this.cards.push(card)
    }

    shiffle(){
        for(let i = this.numberOfCards -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
 
class Player {
    constructor(name) {
        this.name = name,
        this.hand = []
        this.score = 0
    }
}

function deckshuffled() {
    return cardsSuits.flatMap(suit => {
        return cardValues.map(value => {
            return new Card(suit, value)
        })
    })
}

function array1(points) {
    playerSum = array1.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });
    return playerSum
}

function startWar(){
    const newShoot = new Deck()
    newShoot.shuffle()

    const midWar = Math.ceil(newShoot.numberOfCards / 2)

    let playerOne = new Player('Kevin')
    let playerTwo = new Player('Joe')
    playerOne.hand = newShoot.cards.slice(0, midWar)
    playerTwo.hand = newShoot.cards.slice(midWar, newShoot.numberOfCards)
    console.log(playerOne, playerTwo)

    let testCard1 = playerOne
    let testCard2 = playerTwo
    for (let i = 0; i < 26; i++) {
        console.log(testCard1.hand)
    }
}





























export default class Deck {
    constructor(cards) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }
    //i-- because we are going from top of deck to bottom of deck
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

}






class Player {
    constructor(name, deck) {
        this.name 
    }

}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}


//sample online
//https://www.youtube.com/watch?v=I9iYagbjel8
//https://www.youtube.com/watch?v=NxRwIZWjLtE
//https://codepen.io/ashwell/pen/RwKKmV