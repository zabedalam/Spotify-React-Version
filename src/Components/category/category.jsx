import React from 'react';
import './category.css';

const nameStyle = {
  position: 'relative',
  marginBottom: '10px'
};

const picStyle = {
  width: '200px',
  height: '200px',
}

export default function Category({ url, name, type, handleClick }) {
  return (
    <div className="category" onClick={handleClick}>
      {<h3 style={ type && type === 'artist' ? nameStyle : {}}>{name}</h3>}
      <a onDragStart={e => e.preventDefault()}>
        <img src={url} alt={name} style={ type && type === 'artist' ? picStyle : {}}/>
      </a>
    </div>
  );
}
