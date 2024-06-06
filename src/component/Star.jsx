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

const Star = () => {
  const [score, setScore] = useState(3); // 초기 점수 설정

  return (
    <div>
      <StarRating score={score} />
    </div>
  );
};

export default Star;