import React, { useState } from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({dataReview,handleDelete}) => {

  // const [review, setReview] = useState(6);
  // const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolorum.");  

//   const handleClick = () => {
//     setReview((prev) => {
//         return prev + 1;
//     });
//   }



// console.log(dataReview);

  return (
    <>
        {dataReview.map((item) => (
          <div key={item.id}>
            <FeedbackItem item={item} handleDelete={handleDelete}/>
          </div>
        ))}
        {/* <button onClick={handleClick}>Click Me +</button> */}
   </>
  )
}

export default FeedbackList