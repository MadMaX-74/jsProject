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

    if (a != null && b !== null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    }else{
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('You didnt watch a movie...');
}else if(personalMovieDB.count >=10 && personalMovieDB.count <= 30){
    console.log('you are medium watchman movie');
}else if(personalMovieDB.count > 30){
    console.log('you are WATCHMAN');
}else{
    console.log('Error');
}
    

console.log(personalMovieDB);