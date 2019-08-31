import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSearchResults = function({ searchResults, handleClick }) {
  let results = searchResults ? Object.entries(searchResults).map((result) =>
      <Link className="search-links" to={`/users/${result[0]}`} key={result[0]}>
    <div className="search-results-item">
      <img className="search-results-image" src={result[1].photoUrl} />
      {result[1].username}
    </div>
      </Link>
  ) : null

  return (
    <div className="search-results-container" onClick={handleClick}>
      {results}
    </div>
  );
}

export default (NavBarSearchResults);