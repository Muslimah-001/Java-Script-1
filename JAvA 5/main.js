let welcomeEL = document.getElementById("temu")
// console.log(welcomeEL)
let user = "Excuse me, "
let notification = "SomeThing Went Wrong,"
let expiary = " Please Try Again !"
let emoji = '⚠️'
function aura() {
    let message = user + notification + expiary + emoji
    // console.log(message)
    welcomeEL.innerHTML = message
}