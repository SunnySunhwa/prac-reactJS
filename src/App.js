import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


const movies = [
  {
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
];


class App extends Component {
  render() {
    return (
      <div className="App">
      {movies.map((movie, idx) => {
        return <Movie title={movie.title} poster={movie.poster} key={idx}/>
      })}
      </div>
    );
  }
}

export default App;
