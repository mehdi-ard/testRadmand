import React from 'react';
import './assest/style.css';

function Icon({ className, name, ...props }) {
  return <i className={(className, `icon-${name}`)} {...props}></i>;
}

export default Icon;
