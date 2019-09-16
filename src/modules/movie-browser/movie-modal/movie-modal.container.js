import React from 'react';
import {connect} from 'react-redux';
import { Dialog } from 'material-ui';
import _ from 'lodash';
import { closeMovieModal } from './movie-modal.actions';
import { getTvDetails } from '../movie-browser.actions';
import * as movieHelpers from '../movie-browser.helpers';
import Loader from '../../common/loader.component';


const styles = {
  dialogContent: (backgroundUrl) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    minHeight: 400,
    color: 'white',
    padding: '2px',
    
    
    
    
    'position': 'relative',
    'maxwidth': '100%'
    
  })
}

class MovieModalContainer extends React.Component {
  
  componentWillReceiveProps(nextProps) {
    
    if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
      nextProps.getTvDetails(nextProps.movieId);
    }
  }

  render() {
    const {isOpen, closeMovieModal, isLoading} = this.props;
    const movie = movieHelpers.updateMoviePictureUrls(this.props.movie);
    const genres = (movie && movie.genres) ? movie.genres.map(genre => genre.name).join(', ') : '';
    const seasons = (movie && movie.seasons) ? movie.seasons.map(genre => genre.name).join(', ') : '';

    return (
      <Dialog
        autoScrollBodyContent={true}
        title={null}
        modal={false}
        open={isOpen}
        onRequestClose={closeMovieModal}
        style={{}}
      >
        <Loader isLoading={isLoading}>
          <div style={styles.dialogContent(movie.backdrop_path)}>
              <h1>{movie.original_name}</h1>
              <h5>{genres}</h5>
              <p>No of Seasons : {seasons}</p>
              <p>Number of episodes : {movie.number_of_episodes}</p>
              <p>Released on: {movie.first_air_date}</p>
          </div>
        </Loader>
    </Dialog>
   
    );
  }
}

export default connect(

  (state) => ({
    isOpen: _.get(state, 'movieBrowser.movieModal.isOpen', false),
    movieId: _.get(state, 'movieBrowser.movieModal.movieId'),
    movie: _.get(state, 'movieBrowser.movieDetails.response', {}),
    isLoading: _.get(state, 'movieBrowser.movieDetails.isLoading', false),
  }),
  { closeMovieModal, getTvDetails }
)(MovieModalContainer);

