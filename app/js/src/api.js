// TMDB API Key
const TMDB_URL = `https://api.themoviedb.org/3/`
const TMDB_API_KEY = `?api_key=d41fd9978486321b466e29bfec203902`

// TMDB API Variables
const POSTER = `https://image.tmdb.org/t/p/w500`
const FANART =  `https://image.tmdb.org/t/p/w500`
const BACKDROP = `https://image.tmdb.org/t/p/original`
const PREVIEW = `https://image.tmdb.org/t/p/preview`

function getTMDbData(param) {
    let navdata = param.split(',');
    let primary = navdata[0];
    let secondry = navdata[1];

    console.log('TMDB was called!')
}