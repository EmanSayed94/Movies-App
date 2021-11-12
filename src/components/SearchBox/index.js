import React from 'react'
import './search.css'

const SearchBox = ({ handleSearchChange, searchValue, handleClearSearch }) => (
  <div className="search">
    <input
      type="text"
      name=""
      placeholder="Search"
      className="text"
      onChange={handleSearchChange}
      value={searchValue}
    />
    {!searchValue ? (
      <div className="btn">
        <i className="fa fa-search"></i>
      </div>
    ) : (
      <div className="btn close" onClick={handleClearSearch}>
        <i className="fa fa-close"></i>
      </div>
    )}
  </div>
)

export default SearchBox
