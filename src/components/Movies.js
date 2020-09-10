import React from "react";
import PropTypes from "prop-types";

const Movies = ({ movies, addNomination, isNominated }) => {
  return (
    <div className="Movies">
      <h2>Search Results</h2>
      <ul>
        {movies.map((movie) => (
          <li id={movie.imdbID} key={movie.imdbID}>
            {movie.Title} ({movie.Year}){" "}
            <button
              disabled={isNominated(movie)}
              onClick={() => addNomination(movie)}
            >
              Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
