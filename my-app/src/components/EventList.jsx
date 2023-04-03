import React from 'react';
import Styles from "./EventList.module.css";

const EventList = ({events, handleClick}) => {
  return (
    <div>
        {events.map((event) => (
            <div className={Styles.card} key={event.id}>
                <h2>{event.title}</h2>
                <p>{event.date}</p>
                <button onClick={() => handleClick(event.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}
export default EventList