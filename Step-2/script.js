console.log("Step 2");
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener("load", function() {
      // This in here is our callback function
      // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (this.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        console.log("Something is probably wrong with the url");
      }
    });
    request.addEventListener("error", function() {
      console.log("Server error like timeout");
    });
    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
  } 
  // Give each movie a tag: Excellent (>=8.5), Very Good (>=8), Good (<8) based on the ratings

  function moviesTags (movie){
      const rating = movie.rating;
      if (rating >= 8.5){
          return "Excellent";
      } else if (rating >= 8){
          return "Very Good";
      }else  if (rating < 8){
          return "Good";
      } else{
          return "bad"
      }
  }

  getAjaxData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json", function (movies){
    console.log("All Movies", movies);
    
    movies.map(movie => (movie.tag = moviesTags(movie)));
    const Excellent = movies.filter(movie => movie.tag === "Excellent");
    console.log("Movies Taged As Excellent : ", Excellent.length);

    const VeryGood = movies.filter(movie => movie.tag === "Very Good");
    console.log("Movies Taged As Very Good: ", VeryGood.length);

    const GoodMovies = movies.filter(movie => movie.tag === "Good");
    console.log("Movies Taged As Good : ", GoodMovies.length);
  });

let allMovies = document.getElementById('all');

btns.addEventListener('click', function (){
    console.log('dfad', btns);
});
  








