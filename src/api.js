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
  // addMovie: () => {
  //   return fetch('/api/movies', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({title: 'Steal This Movie', rating: '1'})
  //   })
//         .then(response => response.json()).then(data => console.log('success', data));
//   }
};