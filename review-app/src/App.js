import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import ReviewData from './data/ReviewData';
// import Card from './shared/Card';

function App() {

  // Global state
  const [review, setReview] = useState(ReviewData);

  return (
    <>
      <Header/>
      <div className="container">
          <FeedbackList dataReview={review}/>
          {/* <Card>
             <h1>Hello</h1>
          </Card> */}
      </div>

     
    </>
    
  );
}

export default App;


