import React, { useState } from 'react'
import "./NewEventForm.css"

const NewEventForm = ({addEvent}) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

//   const handleChange = (e) => {
//      console.log(e.target.value);
//   }
    const resetForm = () => {
        setTitle("");
        setDate("");
    }

// console.log(title, date);

const handleSubmit = (e) => {
    e.preventDefault();

    if(title === "" || date === ""){
        alert("Please fill the form")
    } else {
        const event = {
            title,
            date,
            id : Math.floor(Math.random() * 100000)
        }
        addEvent(event);
    }
}

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input onChange={(e) => setDate(e.target.value)} type="date" value={date} />
      </div>
      <button>Submit</button>
      <p>title - {title}, date - {date}</p>
      <p onClick={resetForm}>Reset Form</p>
    </form>
  )
}

export default NewEventForm
