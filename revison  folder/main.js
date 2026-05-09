// 1. grab a welcome element and store it in a variable called welcome el
//  2. create 2 variables (username & notification) that contains ur name and the message we want to render on the page i.e "u got a nitification"
// 3. listen for clicks on button when clicked
// 4.render the notification mesage using welcomeEL.innerText



let welcomeEL = document.getElementById("speed")
// console.log(welcomeEL)
let user = "Muslimah, "
let notification = "You have 45 Unread Messages 1 Month Ago,"
let expiary = " Your Account Expiers in 3 Days."
function notify() {
    let message = user + notification + expiary
    // console.log(message)
    welcomeEL.innerHTML = message
}