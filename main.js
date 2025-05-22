// Example: Dynamically add movie cards
document.addEventListener('DOMContentLoaded', () => {
  const moviesSection = document.querySelector('.movies');
  const movies = [
    { title: "Movie 1", img: "assets/images/movie1.jpg" },
    { title: "Movie 2", img: "assets/images/movie2.jpg" }
  ];
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `<img src="${movie.img}" alt="${movie.title}"><h3>${movie.title}</h3>`;
    moviesSection.appendChild(card);
  });
});
