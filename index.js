"Use strict";

let numberOfFilms;


function start() {
    numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};




function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You didnt watch a movie...');
    }else if(personalMovieDB.count >=10 && personalMovieDB.count <= 30){
        console.log('you are medium watchman movie');
    }else if(personalMovieDB.count > 30){
        console.log('you are WATCHMAN');
    }else{
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(personalMovieDB) {
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres.push(prompt(`What you favorit style of movie with number ${i}`, ''));
    }
}
writeYourGenres();
    

console.log(personalMovieDB);