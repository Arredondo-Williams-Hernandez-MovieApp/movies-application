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

//First requirement
$(document).ready(function () {
    getMovies().then((movies) => {
        var movieList = '';
        $('h1').html('Here are all the movies:');
        movies.forEach(({id, title, rating}) => {
            movieList += $('.movies').append(`<li class="movieObject p-3" data-id="${id}">${title} - rating: ${rating}
       </li><button data-id="${id}" class="delete btn btn-primary" type="button">DELETE</button><button data-id="${id}" class="edit btn btn-primary" type="button">EDIT</button>`);
            $('#edit-movie').append(`<option>${title} - rating: ${rating}</option>`);
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

    $('.movies').on('click', 'button.edit', function(e){
       console.log($(e.target).data('id'));

    });


    // edit movie functionality coming soon!
    // $('.edit-fields').append(`<form action=""><label for="edit-title">Change Title: </label>
    //  <input type="text" id="edit-title" name="edit-title">
    //  <label for="edit-rating">Edit Rating: </label><input type="text" id="edit-rating" name="edit-rating"><button id="submit-changes">Make Change</button></form>`)


    //console.log($('#edit-movie option:selected').val());

    // $('#edit-movie').change(function(e){
    //         console.log(e.target.value);
    // });

// button functionality to add a movie
    $('.add-button').click(function () {
        $('h1').html('Loading...');
        addMovie();
        $('p').append({title: $('#movie-title').val(), rating: $('#movie-rating').val()});
        getMovies().then((movies) => {
            $('h1').html('Here are all the movies:');
            $('.movies').append(`<li class="movieObject p-3" data-id="${movies[movies.length-1].id}"> ${movies[movies.length - 1].title} - rating: ${movies[movies.length - 1].rating}
                    </li><button data-id="${movies[movies.length-1].id}" class="delete btn btn-primary" type="button">DELETE</button>
                    <button data-id="${movies[movies.length-1].id}" type="button" class="edit btn btn-primary">EDIT</button>`);
            $('#edit-movie').append(`<option>${movies[movies.length - 1].title} - rating: ${movies[movies.length - 1].rating}</option>`);
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

