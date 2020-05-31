const $ = require('jquery');

module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json());
  },

  addMovie: () => {
    const moviePost = {title: $('#movie-title').val(), rating: $('#movie-rating').val()};
    const url = '/api/movies';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moviePost),
    };
     return fetch(url, options)
        .then(response => response.json());
  },

  editMovie: () => {
    const movieEdit = {title: $('#edit-title').val(), rating: $('#edit-rating').val()};
    const url = '/api/movies/' + $(e.target).data('id');//from a selector
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({movieEdit}),
    };
    return fetch(url, options)
        .then(response => response.json());
  },

//   deleteMovie: () => {
//     const url = '/api/movies';
//     const options = {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedMovie),
//     };
//     return fetch(url, options)
//         .then(response => response.json());
};