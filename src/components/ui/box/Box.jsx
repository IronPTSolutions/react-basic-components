
import React from 'react';
import './Box.css';

function Box(props) {
  const { color, size, text, children } = props;
  return (
    <div className='box' style={{ width: `${size}px`, height: `${size}px`, backgroundColor: color }}>{children}</div>
  )
}

Box.defaultProps = {
  color: 'black',
  size: 30
}


export default Box;
