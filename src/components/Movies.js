import React from "react";
import PropTypes from "prop-types";

const Movies = ({ movies, addNomination }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          {movie.Title} ({movie.Year}){" "}
          <button onClick={() => addNomination(movie)}>Nominate</button>
        </li>
      ))}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
