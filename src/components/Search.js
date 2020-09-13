import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchMovies, showAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length < 3) {
      showAlert("Please enter at least 3 characters", "danger");
    } else {
      searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="Search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Search Movie Title..."
        />

        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Search;
