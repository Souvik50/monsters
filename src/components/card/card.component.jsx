import React from 'react';
import './card.styles.css';

export const Card = ({ ghost }) => {
  return (
    <div className="card-container">
      <img alt="ghosts" src={`https://robohash.org/${ghost.id}.png?set=set2&size=180x180 `}/>
      <h2>{ghost.name}</h2>
      <p>{ghost.email}</p>
    </div>
  );
};