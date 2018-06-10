import React, { Component } from 'react';

const Hint = ({hintText, ...props}) => (
  <div className="hint space-mono">{hintText}</div>
)
export default Hint;
