import {createAsyncActionCreator} from '../common/redux.helpers';
import * as movieService from './movie-browser.service';

export const keys = {
  'GET_TOP_MOVIES': 'GET_TOP_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
};



export const getTvShows = (page) => createAsyncActionCreator(
    keys.GET_TOP_MOVIES,
    movieService.getTvShows, 
    {page}
  );

export const getTvDetails = (movieId) => createAsyncActionCreator(
  keys.GET_MOVIE_DETAILS,
  movieService.getTvDetails, 
  {movieId}
);