import React from 'react';
import './styles/card.css';

function Card({title, content}) {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;