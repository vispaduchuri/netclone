const TMDB_IMAGE_BASE_URL = (width = 500) => `https://image.tmdb.org/t/p/w${width}`;

export const updateMoviePictureUrls = (tvResult, width = 500) => {
  if (tvResult) {
    return {
      ...tvResult,
      backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${tvResult.backdrop_path}`,
      poster_path: `${TMDB_IMAGE_BASE_URL(width)}${tvResult.poster_path}`,
    }
  }
  return {};
};

export const getTvDetails = (tvResponse) => {
  return !!tvResponse ? ([
    ...tvResponse.results.map(tvResult => updateMoviePictureUrls(tvResult))
  ]) : null;
}