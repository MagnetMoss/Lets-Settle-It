
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