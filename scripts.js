
// Var for 4 players
var users4 = ["user1(1/4)", "user2(1/4)", "user3(1/4)", "user4(1/4)"];


// Var for 3 players
var users3 = ["user1(1/3)", "user2(1/3)", "user3(1/3)"]



// Var for 2 players
var users2 = ["user1(1/2)", "user2(1/2)"]





// function and console log for 4 users
    var random = Math.floor(Math.random()*users4.length); 
    

console.log(random, users4[random]);


// function and console log 


     random = Math.floor(Math.random()*users3.length);
     
  console.log(random, users3[random]);   
     
     
     
     
     random = Math.floor(Math.random()*users2.length);
     
     console.log(random, users2[random]);