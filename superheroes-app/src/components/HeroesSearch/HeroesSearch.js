import React from "react";

function Search({ onSearch, onSearchChange }) {
  return (
    <form className="searchbar" >
      <label htmlFor="search">Search Hero:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={onSearch}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </form>
  );
}

export default Search;