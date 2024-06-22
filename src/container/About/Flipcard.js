// src/FlipCard.js
import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontText, backText }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p style={{fontSize:'24px', fontFamily:'Inter', fontWeight:600}}>{frontText}</p>
        </div>
        <div className="flip-card-back">
          <p style={{fontSize:'14px', fontFamily:'Inter', }}>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;