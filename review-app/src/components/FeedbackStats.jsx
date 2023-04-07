import React from 'react';

const FeedbackStats = ({review}) => {

  let average = review.reduce((acc, cur) => {
    return acc + cur.review
  }, 0) / review.length;

  average = average.toFixed(1);
  
  return (
    <div className='feedback-stats'>
      <h4>{review.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
  
}

export default FeedbackStats