import React from 'react';

function BtnIcon(props) {
  const { icon, text } = props;
  return (
    <button>{icon && <i className={`fa fa-${icon}`}></i>} {text}</button>
  )
}

export default BtnIcon;