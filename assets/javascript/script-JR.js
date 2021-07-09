var numPlayers = document.querySelector("#players")
var typeCon = document.querySelector("#conflict")
var conflictRes = document.querySelector("#conRes")
var submitBtn = document.querySelector("#submit")

console.log(numPlayers)
console.log(typeCon)
console.log(conflictRes)

typeCon.style.display= "none"
conflictRes.style.display= "none"

numPlayers.addEventListener("change", function () {
    typeCon.style.display= "block"
})

typeCon.addEventListener("change", function () {
    conflictRes.style.display= "block"
})

submitBtn.addEventListener("click" , function (){
    console.log("click click click");
})

//if custom direct to wheel
//if movie direct to sim
//hide  otherwise