const $ = require('jquery');

/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');



/**
 * require style imports
 */
const {getMovies} = require('./api.js');

//First requirement
$(document).ready(function() {
  //psuedo
  //while text input val === 0, run 'loading...'
  //on input populate html, using live search, keyup event
//
   getMovies().then((movies) => {
    $('h1').html('Here are all the movies:');
    var movieList = '';
    movies.forEach(({title, rating, id}) => {
      movieList += $('p').append(`id#${id} - ${title} - rating: ${rating} `);
    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });


$('button').click(function() {
  $('h1').html('Loading...');
      $.post('/api/movies', {
        "title": $('#movie-title').val(),
        "rating": $('#movie-rating').val()
      });
      addMovie().then(getMovies().then((movies) => {
          $('h1').html('Here are all the movies:');
          movies.forEach(({title, rating, id}) => {
              $('p').html(movieList);
          });
      }).catch((error) => {
          alert('Oh no! Something went wrong.\nCheck the console for details.');
          console.log(error);
      }));
});
  // $.ajax('/api/movies').done(function (data) {
  //   $('#loading').text(`Here are all the movies:`);
  //   data.forEach(({title, rating}) => {
  //     $('.container').append(`<div class="movies">${title} - rating: ${rating}</div>`)
  //   });
  //
  // $('button').click(function (e) {
  //   $('h1').html('Loading...');
  //   e.preventDefault();
  //   $('.container').append(`<div class="movies">${$('#movie-title').val()} - rating: ${$('#movie-rating').val()} </div>`)
  //   setTimeout(function () {
  //     $('h1').html('Here are your movies ')
  //   },2000);
  //   $.post('/api/movies', {
  //     "title": $('#movie-title').val(),
  //     "rating": $('#movie-rating').val()
  //   });
  // });
//   })
//   })
// });

//
});
