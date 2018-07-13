import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
       movies: [{
           title: "Avengers",
           poster: "https://images-na.ssl-images-amazon.com/images/I/719S7I-%2ByBL._SL1023_.jpg"
         },
         {
           title: "The Ant man",
           poster: "http://www.joblo.com/posters/images/full/ant-man-international-2.jpg"
         },
         {
           title: "Rampage",
           poster: "https://ae01.alicdn.com/kf/HTB1RF0gfKySBuNjy1zdq6xPxFXay/Custom-Canvas-Wall-Decals-Monster-Movie-King-Kong-Rampage-Poster-Rampage-Stickers-Dwayne-Johnson-Wallpaper-Office.jpg"
         },
         {
           title: "Get out",
           poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8F5h_cwya5bQrqunsTix3zPkEUyEGszUk3kX-NjOrlzpMuPnU"
         },
         {
            title: "incredibles2",
            poster: "https://images.penguinrandomhouse.com/cover/9780736438506"
          }
        ]
      });
    }, 2000)
  }

  _renderMovies = () => {
     const movies = this.state.movies.map((movie, idx) => {
         return <Movie title = { movie.title }
         poster = { movie.poster } key = { idx} />
       })
    return movies;
  }


  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading!"}
      </div>
    );
  }
}

export default App;
