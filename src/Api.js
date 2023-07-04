import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = 'e061410252c57ca301fb9207be16e51b'

//async buat biar gampang untuk menyesuaikan
export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}