const APIKEY = "07ef9156aaebdc07bec283a2462eb505";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${APIKEY}&with-network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with-genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with-genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with-genre=27`,
  fetchScifiMovies: `/discover/movie?api_key=${APIKEY}&with-genre=10765`,
  fetchDocumentories: `/discover/movie?api_key=${APIKEY}&with-genre=99`,
};

export default requests;
