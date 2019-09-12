import React from 'react';
import {Card, CardTitle, CardMedia} from 'material-ui';
import {connect} from 'react-redux';
import {openMovieModal} from '../movie-modal/movie-modal.actions';


const styles = {
  cardTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardMedia: {
    maxHeight: 390,
    overflow: 'hidden'
  },
  card: {
    cursor: 'pointer',
    height: 390,
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
        // onClick= {() => window.open('/secondscreen','_blank')}
        onClick= {() => openMovieModal(movie.id)}
      >
        {/* <CardTitle title={<div style={styles.cardTitle}>{movie.title}</div>} /> */}
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