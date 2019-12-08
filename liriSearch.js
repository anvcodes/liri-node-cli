var Movie = require("./liri-node-cli").Movie;
var Event =require("./liri-node-cli").Event;
var Spotify= require("./liri-node-cli").spotify;
//var { Movie, Event, Spotify } = require("./liri-node-app")
//has spotify export

require('dotenv').config()
 //var spotify = require("node-spotify-api");


//var spotify = new Spotify (keys.spotify);


var movie = new Movie ();
var event = new Event ();

var spotify = new Spotify();


var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

//OMBD callback
if (search === "movie-this"){
    console.log("youre searching a movie named " + term);
    movie.findMovie(term);

   };

    if(search === "show-this"){
        movie.findShow(term);
       console.log("Youre searching a movie named " + term);
   };

   //bandsintown callback
   if(search === "concert-this"){
    event.findEvent(term);
   };



   if(search === "spotify-this-song"){
   spotify.search(term);
  };