const TV_DB_API_KEY = 'e23bec2a2e96aa2a03f7e2c8c1e7e83d';
const TV_DB_BASE_URL = 'https://api.themoviedb.org/3';


const createtvDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${TV_DB_BASE_URL}${relativeUrl}?api_key=${TV_DB_API_KEY}&language=in&query=tvf&page=1`;
    if (queryParams) {
      Object.keys(queryParams)
        .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
  }
  
  export const getTvShows = async ({page}) => {
    const fullUrl = createtvDbUrl('/search/tv', {
      page
    });
    return fetch(fullUrl);
  }
  
  
  export const getTvDetails = async ({movieId}) => {
    const fullUrl = createtvDbUrl(`/tv/${movieId}`);
    return fetch(fullUrl);
  }

 