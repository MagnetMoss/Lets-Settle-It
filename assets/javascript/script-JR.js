var numPlayers = document.forms[0].elements[0].value
var typeCon = document.querySelector("conflict")
var conflictRes = document.querySelector("conRes")

console.log(numPlayers)
console.log(typeCon)
console.log(conflictRes)

function locStor () {
    var store= localStorage.setItem(numPlayers);
    console.log(store)
}