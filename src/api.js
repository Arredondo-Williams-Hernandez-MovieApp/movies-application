module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },

  // addMovie: () => {
  //   const moviePost = {title: 'Steal This Movie', rating: '1'};
  //   const url = '/api/movies';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(moviePost),
  //   };
  //   return fetch(url, options)
  //       .then(response => response.json).then(data => console.log('success', data))
  // }
  addMovie: () => {
    return fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title: 'Steal This Movie', rating: '1'})
    })
        .then(response => response.json()).then(data => console.log('success', data));
  }
};