
import React from 'react';
import {Row, Col} from 'react-bootstrap';
// import {Carousel} from '../../common/carousel';

import MovieCard from '../movie-card/movie-card.component';
import LoaderComponent from '../../common/loader.component';

const styles = {
  movieColumn: {
    marginBottom: '10px'
  }
}
const MovieListComponent = ({movies, isLoading}) => {
    
  const tvColumns = movies ? movies.map(movie => (
   
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={16} md={3} lg={3}>
      
      <MovieCard movie={movie} />
      
    </Col>
    

  )) : null;
  
  
  
  return ( 
    <Row>
      {tvColumns} 
     
      <LoaderComponent isLoading={isLoading} />
    </Row>       
  );
}

export default MovieListComponent;