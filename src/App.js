import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";
import Alert from "./components/Alert";

import Axios from "axios";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    showBanner();
    // eslint-disable-next-line
  }, [nominations]);

  const searchMovies = async (text) => {
    const res = await Axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`
    );

    setMovies(res.data.Search);
  };

  const addNomination = (movie) => {
    if (nominations.length < 5) {
      setNominations((nominations) => [...nominations, movie]);
    } else {
      showAlert("You already have 5 nominations");
    }
  };

  const removeNomination = (movie) => {
    setNominations(
      nominations.filter((nomination) => nomination.imdbID !== movie.imdbID)
    );
  };

  const isNominated = (movie) =>
    !!nominations.find((nomination) => nomination.imdbID === movie.imdbID);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(null), 5000);
  };

  const showBanner = () => {
    if (nominations.length === 5) {
      showAlert("You reached the maximum number of nominations");
    }
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Alert alert={alert} />
      <Search searchMovies={searchMovies} showAlert={showAlert} />
      <Movies
        movies={movies}
        addNomination={addNomination}
        isNominated={isNominated}
      />
      <Nominations
        nominations={nominations}
        removeNomination={removeNomination}
      />
    </div>
  );
};

export default App;
