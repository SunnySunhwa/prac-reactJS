import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';


function Movie({title, poster, genres, synopsis}){
  return(
    <div className="movie">
      <div className="movie-column">
        <MoviePoster poster={poster} alt={title} title={title}/>
      </div>
      <div className="movie-column">
        <h1> {title}</h1>
        <div className="movie-genres">
          {genres.map((genre, idx) => <MovieGenre genre={genre} key={idx} />)}
        </div>
        <div className="movie-synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  );
} 

function MoviePoster({poster, alt}){
  return(
    <img src={poster} alt={alt} className="movie-poster"/>
  )
}

function MovieGenre({genre}){
  return(
    <span className="movie-genre">{genre}</span>
  )
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}


MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
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
