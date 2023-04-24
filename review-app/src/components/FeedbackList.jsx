import React, { useState } from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = ({handleDelete}) => {
  const {feedback} = useContext(FeedbackContext);

  return (
    <>
        {feedback.map((item) => (
          <div key={item.id}>
            <FeedbackItem item={item} handleDelete={handleDelete}/>
          </div>
        ))}
        {/* <button onClick={handleClick}>Click Me +</button> */}
   </>
  )
}

export default FeedbackList