import React from "react";
import PropTypes from "prop-types";

const Movies = ({ movies }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          {movie.Title} ({movie.Year}) <button>Nominate</button>
        </li>
      ))}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
