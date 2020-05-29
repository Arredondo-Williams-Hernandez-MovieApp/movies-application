const $ = require('jquery');

/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');



/**
 * require style imports
 */
const {getMovies, addMovie} = require('./api.js');

//First requirement
$(document).ready(function() {
   getMovies().then((movies) => {
    var movieList = '';
    $('h1').html('Here are all the movies:');
    movies.forEach(({title, rating}) => {
      movieList += $('.movies').append(`<div class="movieObject">${title} - rating: ${rating}</div>`);
        $('#edit-movie').append(`<option>${title} - rating: ${rating}</option>`)});
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });


// button functionality to add a movie
    $('button').click(function() {
      $('h1').html('Loading...');
          addMovie();
        $('p').append({title: $('#movie-title').val(), rating: $('#movie-rating').val()});
          getMovies().then((movies) => {
              $('h1').html('Here are all the movies:');
                  $('.movies').append(`<div class="movieObject"> ${movies[movies.length-1].title} - rating: ${movies[movies.length-1].rating}</div>`);
                  $('#edit-movie').append(`<option>${movies[movies.length-1].title} - rating: ${movies[movies.length-1].rating}</option>`);
          }).catch((error) => {
              alert('Oh no! Something went wrong.\nCheck the console for details.');
              console.log(error);
          });
    });
});

// edit movie functionality coming soon!
