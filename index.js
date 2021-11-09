"Use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('You didnt watch a movie...');
        }else if(personalMovieDB.count >=10 && personalMovieDB.count <= 30){
            console.log('you are medium watchman movie');
        }else if(personalMovieDB.count > 30){
            console.log('you are WATCHMAN');
        }else{
            console.log('Error');
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++){
        //     let genre = prompt(`What you favorit style of movie with number ${i}`, '');
        //     if (genre === '' || genre == null){
        //         console.log('No genre found');
        //         i--;
        //     } else {
        //         personalMovieDB.genres.push(genre);
        //     }
        // }
        for (let i = 1; i < 2; i++){
            let genres = prompt(`Enter your favorit genre through the loan`).toLocaleLowerCase();
            if (genres === '' || genres == null){
                console.log('No genre found');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorit genre ${i+1} - this ${item}`);
        });
    }
    
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();




console.log(personalMovieDB);