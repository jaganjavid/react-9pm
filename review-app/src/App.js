import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { useState } from 'react';
import ReviewData from './data/ReviewData';
import { FeedbackProvider } from './context/FeedbackContext';

// import Card from './shared/Card';

function App() {

  // Global state
  const [review, setReview] = useState(ReviewData);


  return (
        <FeedbackProvider>
              <Header/>
                <div className="container">
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                </div>
        </FeedbackProvider>
);
}

export default App;


