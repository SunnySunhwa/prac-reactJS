import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}){
  return(
    <div>
      <MoviePoster poster={poster}/>
      <h1> {title}</h1>
    </div>
  );
} 

function MoviePoster({poster}){
  return(
    <img src={poster} alt="Movie Poster" />
  )
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}


MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;


/* in case of "Smart" componenet

class Movie extends Component{

  // for data type checking 
  static propTypes = {
    //isRequired = 'Movie' has to have a title(string) as a prop 
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
  }


  render(){
  //  console.log(this.props) // {title, poster}
    return(
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1> {this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component{
  render(){
  //  console.log(this.props) // {poster}
    return(
      <img src={this.props.poster} alt="Movie Poster" />
    );
  }
}
*/
