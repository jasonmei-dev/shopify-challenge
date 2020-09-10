import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchMovies, showAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something");
    } else {
      searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="Search">
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Movie Title</label>
        <input type="text" name="text" value={text} onChange={onChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Search;
