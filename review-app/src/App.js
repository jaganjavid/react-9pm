import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { useState } from 'react';
import ReviewData from './data/ReviewData';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes , Route , Link} from 'react-router-dom';


function App() {

  // Global state
  const [review, setReview] = useState(ReviewData);

  return (
        <FeedbackProvider>
              <Header/>
              <BrowserRouter>
                <div className="container">
                  <Routes>

                    <Route exact
                           path='/'
                           element={
                            <>
                              <FeedbackForm/>
                              <FeedbackStats/>
                              <FeedbackList/>
                            </>
                           }>
                    </Route>
                    
                    <Route path='/about' element={<AboutPage/>}/>
                    
                  </Routes>
                  <div className='about'>
                    <Link to='/about'>Go to about</Link>
                  </div>
                </div>
              </BrowserRouter>
        </FeedbackProvider>
);
}

export default App;


