import React from 'react';
import { Link } from 'react-router-dom';

export default function({ searchResults }) {
  let results = searchResults ? Object.entries(searchResults).map((result) =>
    <div className="search-results-item">
      <Link to={`/users/${result[0]}`}>
      <img className="search-results-image" src={result[1].photoUrl} />
      {result[1].username}
      </Link>
    </div>
  ) : null

  return (
    <div className="search-results-container">
      {results}
    </div>
  );
}