import React from 'react';
import {Container, Row, Carousel} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import {connect} from 'react-redux';
import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import MovieModal from './movie-modal/movie-modal.container';
import * as scrollHelpers from '../common/scroll.helpers';

const styles = {
    AppBar:{
        background : 'black',
        padding : '5px',
    },
    list : {
        color: 'black',
        fontWeight: 'normal',
        fontSize:'24px' 

    }
};



class MovieBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1
        };
        this.handleScroll = this.handleScroll.bind(this);
      }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {topMovies} = this.props;
    if (!topMovies.isLoading) {
      let percentageScrolled = scrollHelpers.getScrollDownPercentage(window);
      if (percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({currentPage: nextPage});
      }
    }
  }
  render() {
     
    const {topMovies} = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.response);

    return (
        
      <div style={styles}>
        <AppBar title='TVFPLAY' style={styles.AppBar} />
        <Container style={styles}>
          <Row>
              <h1 style={styles.list}>New Releases</h1>
             <MovieList movies={movies} isLoading={topMovies.isLoading} />   
          </Row>
        </Container>
        <MovieModal />  
      </div>
    
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);