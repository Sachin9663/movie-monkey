const API_KEY = 'e29ebf1393026b6fe115e015c7965392'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_original_language=hi`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_original_language=hi`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&&with_original_language=hi`, 
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28&with_original_language=hi`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&with_original_language=hi`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27&with_original_language=hi`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749&with_original_language=hi`,
    fetchDucumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99&with_original_language=hi`,

}

export default requests;