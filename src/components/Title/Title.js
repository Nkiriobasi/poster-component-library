import React from 'react';
import './title.css';

const Title = props => {
    const { children, ...rest } = props;

  return (
    <h1 className='title-text' {...rest}>
        {children}
    </h1>
  );
}

export default Title;