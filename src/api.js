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
  }
};