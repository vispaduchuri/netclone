const MOVIE_DB_API_KEY = 'e23bec2a2e96aa2a03f7e2c8c1e7e83d';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';


const createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=in&query=tvf&page=1`;
    if (queryParams) {
      Object.keys(queryParams)
        .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
  }
  
  export const getTopMovies = async ({page}) => {
    const fullUrl = createMovieDbUrl('/search/tv', {
      page
    });
    return fetch(fullUrl);
  }
  
  
  export const getMovieDetails = async ({movieId}) => {
    const fullUrl = createMovieDbUrl(`/tv/${movieId}`);
    return fetch(fullUrl);
  }

 