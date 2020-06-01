const $ = require('jquery');

/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');


/**
 * require style imports
 */
const {getMovies, addMovie, editMovie, deleteMovie} = require('./api.js');

// Render Movies function

function renderMovies(movies) {
    var movieList = '';
    $('h1').html('Here are all the movies:');
    movies.forEach(({id, title, rating}) => {
        movieList += (`<li class="movieObject p-3">${title} - rating: ${rating}
       </li><button data-id="${id}" data-title="${title}" data-rating="${rating}" class="delete btn btn-primary" type="button">DELETE</button>
       <button data-id="${id}" data-title="${title}" data-rating="${rating}" class="edit btn btn-primary" type="button">EDIT</button>`);
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
        getMovies().then((movies) => {
            $('h1').html('Here are all the movies:');
            $('.movies').append(`<li class="movieObject p-3"> ${movies[movies.length-1].title} - rating: ${movies[movies.length-1].rating}</li>
<button data-id="${movies[movies.length-1].id}" data-title="${movies[movies.length-1].title}" data-rating="${movies[movies.length-1].rating}" class="delete btn btn-primary" type="button">DELETE</button>
                    <button data-id="${movies[movies.length-1].id}" data-title="${movies[movies.length-1].title}" data-rating="${movies[movies.length-1].rating}" type="button" class="edit btn btn-primary">EDIT</button>`);
            $('#edit-movie').append(`<option>${movies[movies.length-1].title} - rating: ${movies[movies.length-1].rating}</option>`);
        }).catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
        });
    });


});


// console log the event target: e.target
// console log the event target with jquery:  $(e.target)
// add a data attribute for the id on the buttons (<button data-id=${id}></button>)
// console.log the value of the data attribute when you click the button: $(e.target).data('id')

