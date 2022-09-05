import React from 'react';
import './poster.css';

const Poster = props => {
    const { variant = 'primary', children, ...rest } = props
  return (
    <div className={`poster ${variant}`} {...rest}>
        {children}
    </div>
  );
}

export default Poster;