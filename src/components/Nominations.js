import React from "react";

const Nominations = ({ nominations, removeNomination }) => {
  return (
    <div className="Nominations">
      <h2>Nominations</h2>
      <ul>
        {nominations.map((nomination) => (
          <li id={nomination.imdbID} key={nomination.imdbID}>
            {nomination.Title} ({nomination.Year}){" "}
            <button onClick={() => removeNomination(nomination)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nominations;
