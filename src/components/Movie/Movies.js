import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import CreateMovie from '../CreateMovie';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [newMovies, setNewMovies] = useState([]);
  
  const addMovie = (movie) => {
    const newMovies = [...movies];
    newMovies.push({
      ...movie,
      id: new Date().getTime().toString(),
      removeAble: true
    })
    console.log({newMovies})
    setMovies(newMovies);
  }

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} />
        </div>
      </div>
      <hr/>
      <div>
        <CreateMovie addMovie={addMovie} />
      </div>
    </div>
  );
}

export default Movies;
