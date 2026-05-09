let numberspace = 0;
function increment (){
    numberspace = numberspace + 1
    countEl.innerHTML = numberspace
}
let countEl = document.getElementById("counter")
let saveEl = document.getElementById ("save-el")



function save () {
    // console.log(numberspace)
    let saveStr = numberspace + " - "
    
    saveEl.innerText += saveStr
}

