import React from "react";
import PropTypes from "prop-types";
import Spinner from "../components/layout/Spinner";

const Movies = ({
  movies,
  loading,
  addNomination,
  isNominated,
  searchText,
}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="Movies">
        {movies.length > 0 && <h2>Results for "{searchText}"</h2>}
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
  }
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
