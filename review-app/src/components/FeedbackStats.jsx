import React from 'react';

const FeedbackStats = ({review}) => {

  const average = review.reduce((acc, cur) => {
    return acc + cur.review
  }, 0) / review.length;
  
  return (
    <div className='feedback-stats'>
      <h4>{review.length} Reviews</h4>
      <h4>Average Rating : {average.toFixed(1)}</h4>
    </div>
  )
  
}

export default FeedbackStats