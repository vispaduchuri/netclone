import {combineReducers} from 'redux';
import {  createAsyncReducer } from '../common/redux.helpers';
import { keys as movieActionKeys } from './movie-browser.actions';
import movieModalReducer from './movie-modal/movie-modal.reducer';

const moviesSuccessReducer = (state, action) => {
  const existingTv = state.response ? state.response.results : [];
  
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [
        ...existingTv,
        ...action.response.results
      ]
    }
  };
}


const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
    [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS),
});

export default movieBrowserReducer;