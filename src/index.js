const $ = require('jquery');

/**
 * es6 modules and imports
 */
// import sayHello from './hello';
//
// sayHello('World');
/**
 * require style imports
 */
const {getMovies, addMovie, editMovie, deleteMovie} = require('./api.js');

// Render Movies function

function renderMovies(movies) {
    var movieList = '';
    $('h1').html('Here are all the movies:');
    movies.forEach(({id, title, rating}) => {
        movieList += (`<div class="movie-container"><li class="movieObject p-3">${title} - rating: ${rating}
       </li><button data-id="${id}" data-title="${title}" data-rating="${rating}" class="delete btn btn-primary" type="button">DELETE</button>
       <button data-id="${id}" data-title="${title}" data-rating="${rating}" class="edit btn btn-primary" type="button">EDIT</button></div>`);
    });
    $('.movies').html(movieList)
}



//First requirement
$(document).ready(function () {
    getMovies().then((renderMovies)
    ).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

    // When the edit button is clicked, the edit fields will be populated with the targeted values.
    var movieID;
    $('.movies').on('click', 'button.edit', function(e){
       movieID = $(e.target).data('id');
       let title = $(e.target).data('title');
       let rating = $(e.target).data('rating');
       console.log(movieID, title, rating);
       $('#movie-title-edit').val(title);
        $('#movie-rating-edit').val(rating);
    });

    // Delete Movie
    $('.movies').on('click', 'button.delete', function (e) {
        $('h1').html("Loading...");
        movieID = $(e.target).data('id');
        deleteMovie(movieID);
        getMovies().then(renderMovies)
    });

    // Send edit to fetch.
    $('.edit-button').click(function(){
       $('h1').html('Loading...');
       let title = $('#movie-title-edit').val();
       let rating = $('#movie-rating-edit').val();
       editMovie(title, rating, movieID);
       getMovies().then(renderMovies);
    });

// button functionality to add a movie
    $('.add-button').click(function () {
        $('h1').html('Loading...');
        addMovie();
        $('p').append({title: $('#movie-title').val(), rating: $('#movie-rating').val()});
        getMovies().then(renderMovies)
        });
});

