import React, { useState } from 'react';

const StarStyle = ({ filled }) => (
  <span style={{ color: filled ? '#ffbb00' : 'lightgray', fontSize: '18px' }}>
    ★
  </span>
);

const StarRating = ({ score }) => {
  const totalStars = 5;
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <StarStyle key={index} filled={index < score} />
      ))}
    </div>
  );
};

export default StarRating;