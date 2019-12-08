var axios =  require("axios");
var fs= require("fs");




var term = process.argv.slice(3).join(" ");

var Movie = function(){

    this.findMovie= function(){
        var divider= "------------------------------------------------------------";
    
        axios.get("http://www.omdbapi.com/?t=" + term + "&apikey=27ec5952")
        .then(function (response){
            var jsonData = response.data;
            
        
            var movieData = [
                this.Title = jsonData.Title,
                this.Year = jsonData.Year,
                this.Rated = jsonData.Rated,
                this.Actors= jsonData.Actors,
                this.plot=  jsonData.Plot

            ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
           
            fs.appendFile("results.txt", movieData + divider, function(err) {
                if (err) throw err;
                console.log(movieData);
            });

        });
        

    };

    this.findShow = function(){
        var divider= "---------------------------------------------------------------";
        axios.get("http://www.omdbapi.com/?t=" + term + "&apikey=27ec5952")
        .then(function (response){
            var jsonData = response.data;
            var showData = [
                this.Title = jsonData.Title,
                this.Year = jsonData.Year,
                this.Rated = jsonData.Rated,
                this.Actors= jsonData.Actors,
                this.plot=  jsonData.Plot

            ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
           
            fs.appendFile("results.txt", showData + divider, function(err) {
                if (err) throw err;
                console.log(showData);
            });
        });
    }   
    
};

var Event = function(){

    this.findEvent = function(){
        var divider= "------------------------------------------------------------";

        axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp")
        .then(function (response){
            var jsonData = response.data[1];

            var showConcert = [
            //this.offers = jsonData.offers,
                this.venueName = jsonData.venue.name,
            this.venue= jsonData.venue.country,
            this.city= jsonData.venue.city,
        
           
            //this.date= jsonData.lineup
            

            ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
           
            fs.appendFile("concert.txt", showConcert + divider, function(err) {
                if (err) throw err;
                console.log(showConcert);
            });
            
        
    

        });
    }


}

var Spotify = function(){


this.search= function(){

//process.env.SPOTIFY_API_KEY

 spotify.search({ type: "track", query: term }, function(err, data) {

       this.data= data;
       if (err) {
         return console.log("Error occurred: " + err);
          

          
       }
       
     console.log(data); 
     });





}






}



//var movieData = [
      //  this.Title = jsonData.Title,
      //  this.Year = jsonData.Year,
       // this.Rated = jsonData.Rated,
       // this.Actors= jsonData.Actors,
       // this.plot=  jsonData.Plot

   // ].join("\n\n");

    // Append showData and the divider to log.txt, print showData to the console
   
   // fs.appendFile("results.txt", movieData + divider, function(err) {
       // if (err) throw err;
        //console.log(movieData);
   // });

    //var Music = function(){
      //  this.findSong = function(){
                
                
           // bandsIntown
           // .getArtistEventList('Skrillex')
           // .then(function(events) {

            //console.log(events);

           // });






        //};
  //  };
                

module.exports= {Movie, Event,Spotify};
