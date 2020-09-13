import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";
import Alert from "./components/layout/Alert";

import Axios from "axios";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    showBanner();
    // eslint-disable-next-line
  }, [nominations]);

  const searchMovies = async (text) => {
    setLoading(true);

    const res = await Axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`
    );

    setMovies(res.data.Search);
    setSearchText(text);
    setLoading(false);
  };

  const addNomination = (movie) => {
    if (nominations.length < 5) {
      setNominations((nominations) => [...nominations, movie]);
    } else {
      showAlert("You already have 5 nominations", "danger");
    }
  };

  const removeNomination = (movie) => {
    setNominations(
      nominations.filter((nomination) => nomination.imdbID !== movie.imdbID)
    );
  };

  const isNominated = (movie) =>
    !!nominations.find((nomination) => nomination.imdbID === movie.imdbID);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const showBanner = () => {
    if (nominations.length === 5) {
      showAlert("You reached the maximum number of nominations", "success");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Alert alert={alert} />
        <h1>The Shoppies</h1>
        <Search searchMovies={searchMovies} showAlert={showAlert} />
        <Movies
          movies={movies}
          loading={loading}
          addNomination={addNomination}
          isNominated={isNominated}
          searchText={searchText}
        />
        <Nominations
          nominations={nominations}
          removeNomination={removeNomination}
        />
      </div>
    </div>
  );
};

export default App;
