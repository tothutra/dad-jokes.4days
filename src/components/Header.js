import React, { Component } from 'react';

const Header = ({hasResult, clearSearch,...props}) => (
  <div className="space-mono">
    {hasResult?
      <div>
        <h2 className="f2">HAHAHAHAHA</h2>
        <h3 className="pointer" onClick={()=> clearSearch()}>Reset</h3>
      </div>
      :
      <h2>Make me laugh</h2>}
  </div>
)

export default Header;
