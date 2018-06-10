import React, { Component } from 'react';

const Hint = ({hintText, ...props}) => (
  <div className="hint space-mono mb2">
    <h2>{hintText}</h2>
  </div>
)
export default Hint;
