import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { useState } from 'react';
import ReviewData from './data/ReviewData';


// import Card from './shared/Card';

function App() {

  // Global state
  const [review, setReview] = useState(ReviewData);


  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure")){
      setReview(review.filter((item) => item.id !== id));
    }
  }


  return (
    <>
      <Header/>
      <div className="container">
          <FeedbackForm/>
          <FeedbackStats review={review}/>
          <FeedbackList dataReview={review} handleDelete={deleteFeedback}/>
          {/* <Card>
             <h1>Hello</h1>
          </Card> */}
      </div>

     
    </>
    
  );
}

export default App;


