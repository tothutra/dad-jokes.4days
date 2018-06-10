import React, { Component } from 'react';

const SearchResult = ({result,...props}) => (
  <div className="search-result grid-item z-5">
    <h1 className="nunito f1">{result}</h1>
  </div>
)

export default SearchResult;
