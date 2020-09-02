import React, { Component } from "react";
import Search from "./components/Search";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    movies: [],
    nominations: [],
  };

  searchMovies = async (text) => {
    const res = await Axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`
    );

    this.setState({ movies: res.data.Search });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Search searchMovies={this.searchMovies} />
      </div>
    );
  }
}

export default App;
