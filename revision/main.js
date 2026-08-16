/*  let name = "Gary"
let hisAge = 14
let hasPhone = true


function hi () {
if ( hasPhone == true) {
console.log("He can have a phone")
} else {
    console.log("He already has one")
}

}

hi()
*/

/*
let myOrder = 'burger' //string
let price = 100    //number
let hasBag = false //Boolean
 
console.log(hasBag)

function makeOrder (){
    if (hasBag === true) {
console.log("this order has been received")
    } else {
 console.log("the order has not been received")
    }
}

makeOrder()
*/

/*
Introduction:

1. Create two variables: firstTest and secondTest.
2. Assign any test scores of your choice (between 0 and 10) to the variables.
3. Create a variable called sum and set it to the total of the two test scores.
4. Display the total score in the console.

Challenge:
Use an if...else statement to check whether the student passed the test.

- The pass mark is 10.
- If the total score is 10 or more, print "You passed!"
- Otherwise, print "You failed."
*/

/*
let firstTest = 4
let secondTest = 5

let sum = firstTest + secondTest

console.log(sum)

let passMark = 10

if (sum >= 10) {
    console.log("you passed")
} else {
    console.log("you failed")
}
*/

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let answerEl = document.getElementById("answer-el")
let freshEl = document.getElementById("fresh-el")

let firstCard = 11
let secondCard = 10
let answer = firstCard + secondCard
let message = " "
let isAlive = true
let hasBlackjack = false

function startGame(){
    cardsEl.textContent = "Cards: " + firstCard +" "+ secondCard
    answerEl.textContent = "Sum: " + answer
    
    if (answer<= 20){
        message =("Draw A New Card")
    }else if (answer === 21){
        message =("You Have BlackJack!")
        hasBlackjack = true
    }else{
        message =("You're Out Of the")
    }
    messageEl.textContent = message
}

let newGames = 0

function newGame() {
cardsEl.textContent = "Cards: " + newGames + " " + newGames
answerEl.textContent = "Sum: " + newGames 
messageEl.textContent = "Click To Start New Game!"
}
console.log(isAlive)