import React, { useState } from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = ({handleDelete}) => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if(isLoading){
    return <h3>Loading ...</h3>;
  }


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