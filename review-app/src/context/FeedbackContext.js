import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const updateFeedBack = (id, updItem) => {
        setFeedback(feedback.map((item) => 
        (item.id === id) ? { ...item, ...updItem } 
        : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure")){
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedBack
    }}>
      {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;