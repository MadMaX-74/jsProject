"Use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

let a = prompt('Enter a last watched movie', '');
let b = prompt('How stars do you gotten', '');
let c = prompt('Enter a last watched movie');
let d = prompt('How stars do you gotten', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);