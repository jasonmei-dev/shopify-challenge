import React, { useState } from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";

import Axios from "axios";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  const searchMovies = async (text) => {
    const res = await Axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`
    );

    setMovies(res.data.Search);
  };

  const addNomination = (movie) => {
    setNominations((nominations) => [...nominations, movie]);
  };

  const removeNomination = (movie) => {
    setNominations(
      nominations.filter((nomination) => nomination.imdbID !== movie.imdbID)
    );
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Search searchMovies={searchMovies} />
      <Movies movies={movies} addNomination={addNomination} />
      <Nominations
        nominations={nominations}
        removeNomination={removeNomination}
      />
    </div>
  );
};

export default App;
