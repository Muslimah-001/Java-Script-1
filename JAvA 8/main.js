

// Conditional Statement

/* 
Your first if/else statement

1. Check if the person is old enough to drive a car in Canada
2. Log a suitable message to the console in both cases
*/
 
//  let age = 16  // = asingment operator
               // == eqaul to
               // === strict eqaul to
// if (age < 16) {
//     console.log ("you cannot drive a car")
// }else {
//     console.log ("you can drive a car")
// }
// if under 16 you are not permitted to drive
// otherwise you can drive


/* 
if/else statement practice

Check if the person is eligible for a birhtday card from the king (100)
*/

// let age = 100
 
// if (age < 100) {
//     console.log ("Not eligible")
// }else if (age === 100 ) {
//     console.log("here is your birthday invite from the king")

// }else{ 
//    console.log("not eligable, you have already gottne one!") 
// }

/* 
if less than 100    -> "Not eligible"
else if exactly 100  -> "Here is your birhtday card from the king!"
else            -> "Not eligible, you have already gottne one!"
*/




/* 
Lesson1:
1. Create two variables, firstCard and secondCard.
2. Set their values to a random number between 2 - 11

3. Create a variable, sum, and set it to the sum of the two cards.
*/






/* 
if less than or equal to 20  ->  "Do you want to draw a new card? 😊"
else if exactly 21      ->   "Wohooo! You've got blackjack! 😒"
else      ->   "You're out of the game 😂"
*/



/* 
Lesson 4: 
1. Add hasBlackjack variable and set it to false
2. Reassign it to true after you have logged out the message when of sum === 21
3. log it out after all
 */

/* 
Lesson 9: Display the message

1. Store the message-el paragraph in a variable called messageEl
2. Display the message in the messageEl using messageEl.textContent

Lesson 10: Display the sum

1. Store the sum paragraph in a variable called sumEl
2. Render the sum on the page using this format

Lesson 11: Display the Cards

1. Store the cards paragraph in a variable called cardsEl
2. Render the cards on the page using this format "Cards: 4 5"
*/



let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
hasBlackjack = false
isAlive = true
let message = ""


 let messageEl = document.getElementById("message-el") 
 let sumEl =  document.getElementById("sum-el") 
 let cardsEl =  document.getElementById("cards-el") 
 
 
 function startGame() {
     cardsEl.textContent = "Cards:" + " " + firstCard + " " + secondCard
    messageEl.textContent = " " + message
    sumEl.textContent = "Sum:" + sum
   
    
    if (sum < 20) {
        message ="Do you want to draw a new card? 🃏"
    
    } else if (sum == 20) {
        message = "Wohooo! You've got blackjack! 😎"
        hasBlackjack = true
        
    } else {
        message = "You are out of the game! 💸💸💸"
        isAlive = false
    }
    
    // console.log(message)
}



//  console.log(firstCard)
//  console.log(secondCard)
// console.log(hasBlackjack)
// console.log(isAlive)

/*
console.log(4 === 3)   //false
console.log(5 > 2)     //true
console.log(12 > 12)  //flase
console.log(3 < 0)    //false
console.log(3 >= 3)    //true
console.log(11 <= 11)  //true
console.log(3 <= 2)    //false
/*
Introduction:

1. Create two variables: firstTest and secondTest.
2. Assign any test scores of your choice (between 0 and 10) to the variables.
3. Create a variable called sum and set it to the total of the two test scores.
4. Display the total score in the console.
*/

/*
Challenge:

Use an if...else statement to check whether the student passed the test.

- The pass mark is 10.
- If the total score is 10 or more, print "You passed!"
- Otherwise, print "You failed."
*/

/*
let firstTest = 5
let secondTest = 5
let sum = firstTest + secondTest  

console.log('Total Score: ' + firstTest + secondTest)

    if( sum >= 10) {
    console.log("You Passed ✅!")
} else {
    console.log("You Failed ❌")
}
    */





