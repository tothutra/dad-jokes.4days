import React, { Component } from 'react';

const Header = ({hasResult, ...props}) => (
  <div className="space-mono">{hasResult? <h2>HAHAHAHAHA</h2> : <h2>Make me laugh</h2>}</div>
)

export default Header;
