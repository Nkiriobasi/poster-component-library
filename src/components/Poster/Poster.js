import React from 'react';
import './poster.css';

const Poster = props => {
    const { children, ...rest } = props;
    
  return (
    <div className='poster' {...rest}>
        {children}
    </div>
  );
}

export default Poster;