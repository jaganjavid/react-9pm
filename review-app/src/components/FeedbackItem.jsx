import React from 'react';
import Card from '../shared/Card';
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {
  
  const {deleteFeedback} = useContext(FeedbackContext);

  return (
   <Card>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='red'/>
        </button>
        <div className='text-display'>{item.text}</div>
        <button className='edit'>
          <FaEdit color='blue'/>
        </button>
   </Card>
  )
}

export default FeedbackItem