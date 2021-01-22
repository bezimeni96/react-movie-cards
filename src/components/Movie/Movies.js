import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import CreateMovie from '../CreateMovie';

export const MovieContext = React.createContext();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  
  const addMovie = (movie) => {
    const newMovies = [...movies];
    newMovies.push({
      ...movie,
      id: new Date().getTime().toString(),
      removeAble: true,
      numOfRate: 0,
      rating: 0
    })
    setMovies(newMovies);
  }

  const handleRemove = (id) => {
    setMovies((movies) => {
      return movies.filter((movie) => movie.id !== id);
    });
  }

  const handleRating = (id, rate) => {
    setMovies((movies) => {
      return movies.map((movie) => {
        if (movie.id === id) {
          const numOfRate = movie.numOfRate + 1 ;
          const rating = movie.rating + rate;
          return {
            ...movie,
            numOfRate,
            rating
          };
        } else {
          return movie;
        }
      });
    });
  }

  useEffect(() => {
    const newMovies = MovieService.getMovies();
    setMovies(() => newMovies.map((movie) => {
      return {
        ...movie,
        numOfRate: 1,
      }
    }));
  }, []);

  return (
    <MovieContext.Provider value={{ handleRemove, handleRating }} className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} />
        </div>
      </div>
      <hr/>
      <div>
        <CreateMovie addMovie={addMovie} />
      </div>
    </MovieContext.Provider>
  );
}

export default Movies;
