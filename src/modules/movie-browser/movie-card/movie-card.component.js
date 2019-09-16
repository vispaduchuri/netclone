import React from 'react';
import {Card, CardTitle, CardMedia} from 'material-ui';
import {connect} from 'react-redux';
import {openMovieModal} from '../movie-modal/movie-modal.actions';
import { Link } from 'react-router-dom'
// import Secondscreen from '../../common/secondscreen';


const styles = {
  cardMedia: {
    overflow: 'hidden'
  },
  card: {
    cursor: 'pointer',
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height : '100%'
    
  }
};

class MovieCardComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isMouseOver: false
    };
  }
  
  render() {
    const {movie, openMovieModal} = this.props;
   
  
    const submovie = this.state.isMouseOver ? movie.name : null;
    

    return (
      <Card
        style={styles.card}
        onMouseOver={() => this.setState({isMouseOver: true})}
        onMouseLeave={() => this.setState({isMouseOver: false})}
        
        onClick= {() => openMovieModal(movie.id)}
      >
        <CardMedia
          style={styles.cardMedia}
          overlay={
            <CardTitle
              title={submovie}
              
            />
          }
        >
          <img style={styles.bgImage} src={movie.poster_path} alt={movie.original_name} />
        </CardMedia>
      </Card>
    );
  }
}

export default connect(
    () => ({}),
    { openMovieModal }
  )(MovieCardComponent);