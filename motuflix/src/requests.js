const API_KEY = "19fdf69c0c7e441d04ce9b27d1d1b2d9";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language`,
    fetchNetflixOriginals:`/discover/tv?api_key`,
    fetchTopRated:``,
    fetchActionMovies:``,
    fetchComedyMovies:``,
    fetchHorrorMovies:``,
    fetchRomanceMovies:``,
    fetchDocumentaries:``

}

export default requests;