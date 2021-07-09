// ac js
var input1 = document.getElementById('input-1');
var input2 = document.getElementById('input-2');
var input3 = document.getElementById('input-3');
var input4 = document.getElementById('input-4');
var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    var storedArray = [];
    if (localStorage.getItem('CustomInput') !== null) {
        storedArray = JSON.parse(localStorage.getItem('CustomInput'));
    }
    
    var newArray = [input1.value, input2.value, input3.value, input4.value];
    console.log(newArray);

    storedArray.push(newArray);

    localStorage.setItem('CustomInput', JSON.stringify(storedArray));
});


// sim js
var posterImg = document.getElementById("movie")

fetch("https://api.themoviedb.org/3/movie/550?api_key=0cd6a3dfb0cc7261caba989278533306")
    // .then((success) => { success.json() } )
    // .then((movies) => { console.log(movies) } )
    // .catch((error)=>{ console.log(error)});
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err))





    var rand = Math.floor(Math.random() * 20);
var randPg = Math.floor(Math.random() * 50);
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/discover/movie?&page=" + randPg + "&include_video=false&include_adult=false&sort_by=popularity.dsc&region=US&language=en-US&api_key=0cd6a3dfb0cc7261caba989278533306",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);  
  console.log(response.results[rand]);
  fetch(`http://www.omdbapi.com/?t=${response.results[rand].title}&apikey=5ccdba89`)
    // .then((success) => { success.json() } )
    // .then((movies) => { console.log(movies) } )
    // .catch((error)=>{ console.log(error)});
    .then(response => response.json())
    .then(response => {
        console.log(response);
        document.querySelector("#randomMovieDisplay").innerHTML=`${response.Title}`
        // document.querySelector(".imagePoster").innerHTML=`${response.Poster}`
        var image = response.Poster
        console.log(image)
        var img = document.createElement("img")
        img.src = image
        posterImg.append(img)
        document.querySelector("#movieDescription").innerHTML=`${response.Plot}`
        document.querySelector("#metascore").innerHTML=`${response.Metascore}`
        document.querySelector("#runtime").innerHTML=`${response.Runtime}`
        // TODO: need to add to the container in html 

        // input1.addEventListener("change", function (e){
        //     var span1= document.querySelectorAll(".span1")
        //     for (let index = 0; index < span1.length; index++) {
        //         const element = span1[index];
        //         element.innerHTML=`<b>${e.target.value}</b>`
        //     }
        //     console.log(e.target.value)
        // })

    })
    .catch(err => console.log(err))  
});   

// wheel js
function myfunction(){


	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000); //5000 = 5 second
}

var input1 = document.getElementById('input-1');
var input2 = document.getElementById('input-2');
var input3 = document.getElementById('input-3');
var input4 = document.getElementById('input-4');
var submitBtn = document.getElementById('submitBtn');
input1.addEventListener("change", function (e){
    var span1= document.querySelectorAll(".span1")
    for (let index = 0; index < span1.length; index++) {
        const element = span1[index];
        element.innerHTML=`<b>${e.target.value}</b>`
    }
    console.log(e.target.value)
})
input2.addEventListener("change", function (e){
    var span2= document.querySelectorAll(".span2")
    for (let index = 0; index < span2.length; index++) {
        const element = span2[index];
        element.innerHTML=`<b>${e.target.value}</b>`
        
    }
    


})

input3.addEventListener("change", function (e){
    var span3= document.querySelectorAll(".span3")
    for (let index = 0; index < span3.length; index++) {
        const element = span3[index];
        element.innerHTML=`<b>${e.target.value}</b>`
        
    }
    


})

input4.addEventListener("change", function (e){
    var span4= document.querySelectorAll(".span4")
    for (let index = 0; index < span4.length; index++) {
        const element = span4[index];
        element.innerHTML=`<b>${e.target.value}</b>`
        
    }
    


})


// jared js

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



// randomuser

// Var for 4 players
var users4 = ["user1(1/4)", "user2(1/4)", "user3(1/4)", "user4(1/4)"];


// Var for 3 players
var users3 = ["user1(1/3)", "user2(1/3)", "user3(1/3)"]



// Var for 2 players
var users2 = ["user1(1/2)", "user2(1/2)"]


// If else statement that determines which function to run based off button
// sellect


// function and console log for 4 users
    var random = Math.floor(Math.random()*users4.length); 
    

console.log(random, users4[random]);


// function and console log for 3 users 


     random = Math.floor(Math.random()*users3.length);
     
  console.log(random, users3[random]);   
  
//   function and console log for 2 users
     
     
     
     random = Math.floor(Math.random()*users2.length);
     
     console.log(random, users2[random]);