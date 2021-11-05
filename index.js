"Use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};


for(let i = 0; i < 2; i++) {
    let a = prompt('Enter a last watched movie', '');
    let b = prompt('How stars do you gotten', '');

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);