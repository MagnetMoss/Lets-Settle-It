// const api_key = "oM7oOTMGDpqXEV1c_P36ha2Dby1Gj76L5 - XzEzlHRoXWvdNV0VTAueGfJlVG4FzTiO4DIheJNUKdFSvxd6PDU5quwnA6JYhUqLy2jjcLTqeihq708ZitMW8NO4_kYHYx"

// fetch("https://api.yelp.com/v3/businesses/search", {
//     // withCredentials: true,
//     // credentials: 'include',
//     mode: "no-cors",
//     timeout: 0,
//     headers: {
//         accept: "application/json",
//         "x-requested-with": "xmlhttprequest",
//         "Access-Control-Allow-Origin": "*",
//         Authorization: "Bearer " + api_key
//         // API_KEY: api_key
//     }
// }
// )
//     // authorization: 
//     // .then(response => response.json())
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => console.log(err))


// fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt3398228&source=imdb&country=us", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "df13208f61msh0973fa59a5f9acep13e446jsn02368b26ac63",
// 		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "df13208f61msh0973fa59a5f9acep13e446jsn02368b26ac63",
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "df13208f61msh0973fa59a5f9acep13e446jsn02368b26ac63",
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });






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
        alert(response.Title)
    })
    .catch(err => console.log(err))  
});   




// "https://api.themoviedb.org/3/discover/movie?api_key=0cd6a3dfb0cc7261caba989278533306&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

// "year="