import { useState } from 'react';
import './App.css';

function App() {
  // state - data
  
  const [name, setName] = useState("Jagan"); 
  const [events, setEvents] = useState([
    {title:"This is a dance event", id:1},
    {title:"This is a sing event", id:2},
    {title:"This is a bike event", id:3},
  ]);
  const [showEvents, setShowEvents] = useState(true);

  console.log(showEvents);

   const handleClick = () => {
    setName("Javid");
    console.log(name);
  }

  const handleRemove = (id) => {
    // Filtering Not Equal to the array
    // setEvents(events.filter((event) => {
    //   return id !== event.id
    // }))
    setEvents((prevEvent) => {
      // console.log(prevEvent);
      return prevEvent.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className="App">
      
      {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>hide Event</button>
      </div>}

      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>Show Event</button>
      </div>}

      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>

      {showEvents && events.map((event) => (
        <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleRemove(event.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
