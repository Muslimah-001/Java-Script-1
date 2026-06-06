 // reasining and incrementing

// let name = 'Muslimah'
// name = 'Fawziyah'

// DOM manipulation

// document.getElementById('counter') .innerHTML = 670;

// let bonuspoint = 50;
// console.log(bonuspoint);

// bonuspoint + bonuspoint
// console.log(100);

// bonuspoint + bonuspoint - 25;
// console.log(75);

// bonuspoint + bonuspoint - 25 + 45;
// console.log(70 ) 



// function speed() {
//     console.log(10)
//     console.log(9)
//     console.log(8)
//     console.log(7)
//     console.log(6)
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }




// speed()
// let lap1 = 45;
// let lap2 = 34;
// let lap3 = 60;
// function agile() {
//  console.log(lap1 + lap2 +lap3)   
// }





// Task 2 intalize the count as 100 
// listen for clicks on the decrement button
// decrement the count variable when the button is clicked by 2
//

// let body = document.getElementById('counter') .innerHTML = 0;


// let lapsCompleted= 100;
// let lapsCounted= 100;

// function decrement() {
//     lapsCompleted -= 2
// console.log(lapsCompleted)
// }

// function lapsIncrement() {
//     lapsCounted += 5
// console.log(lapsCounted)
// }



// 1.initialize the numbercount as 0
// 2.listen for clickes on the increment 
// 3.increment the count variable when the button is clicked
// 4. change the countEl in the html to reflect the new count.

let countEl = document.getElementById('counter')
let numberCount = 0;

function lapsIncrement() {
    numberCount += 1
  countEl.innerHTML = numberCount
}

let countEls = document.getElementById('counter')
let numberCounter = 0;

function decrement() {
    numberCount -= 1
  countEl.innerHTML = numberCount
}

// create a function save(), wich logs out the
//  count number
//  when its cliked in console

// function save (){
// console.log(numberCount)
// }





function save () {
  // console.log(numberspace)
  let saveStr = numberCount+ " - "
  // saveEl.innerText += saveStr
  saveEl.textContent += saveStr
  countEl.textContent = 0
  numberCount = 0
}
let saveEl = document.getElementById ("save-el")



/* 
Lesson 13: Debugging Online
Google: innertext alternative mdn
*/
