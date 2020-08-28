import axios from 'axios' ;

// base usrl to make request to tmdb

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
}) ;

export default instance ;