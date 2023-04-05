import React from 'react';
import Card from '../shared/Card';
import { FaTimes, FaEdit } from "react-icons/fa";

const FeedbackItem = ({item,handleDelete}) => {


  return (
   <Card>
        <div className='num-display'>{item.review}</div>
        <button className='close' onClick={() => handleDelete(item.id)}>
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