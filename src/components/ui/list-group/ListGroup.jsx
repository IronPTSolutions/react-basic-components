import React from 'react';
import './ListGroup.css';

function ListGroup({ items }) {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li key={item} className='list-group-item'>{item}</li>
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  items: []
}

export default ListGroup;