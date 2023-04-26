import { createContext, useState, useEffect} from "react";
// import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback()
    },[])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback`);
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`http://localhost:5000/feedback`, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        // newFeedback.id = uuidv4();

        setFeedback([data, ...feedback]);
    }

    const updateFeedBack = async(id, updItem) => {

        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => 
        (item.id === id) ? { ...item, ...data } 
        : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure")){
        await fetch(`http://localhost:5000/feedback/${id}`, {
            method: "DELETE"
        })
        setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedBack
    }}>
      {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;