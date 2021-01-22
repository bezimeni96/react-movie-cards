import React, { useEffect, useState, useContext } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import CreateMovie from '../CreateMovie';

export const MovieContext = React.createContext();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const action = useContext(MovieContext);
  
  const addMovie = (movie) => {
    const newMovies = [...movies];
    newMovies.push({
      ...movie,
      id: new Date().getTime().toString(),
      removeAble: true
    })
    setMovies(newMovies);
  }

  const handleRemove = (id) => {
    setMovies((movies) => {
      return movies.filter((movie) => movie.id !== id);
    });
  }

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <MovieContext.Provider value={handleRemove} className="container-fluid" style={{ marginLeft: '-15px' }}>
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
