import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export default function({ searchResults, handleClick }) {
  let results = searchResults ? Object.entries(searchResults).map((result) =>
      <Link className="search-links" to={`/users/${result[0]}`}>
    <div className="search-results-item">
      <img className="search-results-image" src={result[1].photoUrl} />
      {result[1].username}
    </div>
      </Link>
  ) : null

  return (
    <div className="search-results-container" onClick={handleClick.bind(this)}>
      {results}
    </div>
  );
}