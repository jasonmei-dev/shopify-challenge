import React from "react";

const Nominations = ({ nominations, removeNomination }) => {
  return (
    <div>
      <h2>Nominations</h2>
      {nominations.map((nomination) => (
        <li key={nomination.imdbID}>
          {nomination.Title} ({nomination.Year}){" "}
          <button onClick={() => removeNomination(nomination)}>Remove</button>
        </li>
      ))}
    </div>
  );
};

export default Nominations;
