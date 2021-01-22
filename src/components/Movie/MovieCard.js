import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import { MovieContext } from './Movies';

import StarRating from '../StarRating';

const MovieCard = ({ movie }) => {
  const handleRemove = useContext(MovieContext);
  
  return (
  <div className="movie-card">
    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating rating={movie.rating} />
          </div>
          <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
        </div>
      </div>
      { movie.removeAble &&
        <button type="button" onClick={() => handleRemove(movie.id)}>remove</button>
      }
    </div>
  </div>
);}

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
