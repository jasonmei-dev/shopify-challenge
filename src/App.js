import React, { useState } from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  const searchMovies = async (text) => {
    const res = await Axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`
    );

    setMovies(res.data.Search);
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Search searchMovies={searchMovies} />
      <Movies movies={movies} />
    </div>
  );
};

export default App;
