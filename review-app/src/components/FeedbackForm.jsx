import React, { useState,useContext, useEffect} from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';


const FeedbackForm = ({handleAdd}) => {

  const { addFeedback, feedbackEdit, updateFeedBack } = useContext(FeedbackContext);

   const [text, setText] = useState("");
   const [rating, setRating] = useState(10);
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState("");

   const handleTextChange = ({target:{value}}) => {

    if(value === ""){
        setBtnDisabled(true)
        setMessage(null)
    } else if(value.trim().length < 10){
        setMessage("Text Must be at least 10 character");
        setBtnDisabled(true)
    } else{
        setMessage(null)
        setBtnDisabled(false);
    }

    setText(value);
     
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if(text.trim().length > 10){
         const newFeedback = {
          text,
          rating
         }

         if(feedbackEdit.edit === true){
           updateFeedBack(feedbackEdit.item.id, newFeedback);
         } else {
           addFeedback(newFeedback);
         }

      }
      setText("");
   }

   useEffect(() => {
     if(feedbackEdit.edit === true){
       setBtnDisabled(false)
       setText(feedbackEdit.item.text)
       setRating(feedbackEdit.item.rating)
     }
   }, [feedbackEdit])

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Please Add Your Review</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
               <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
            </div>

            <Button type="submit" isDisable={btnDisabled}>
              Send
            </Button>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm