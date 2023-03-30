import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Model from './components/Model';

function App() {
  // state - data
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("Jagan"); 
  const [events, setEvents] = useState([
    {title:"This is a dance event", id:1},
    {title:"This is a sing event", id:2},
    {title:"This is a bike event", id:3},
  ]);
  const [showEvents, setShowEvents] = useState(true);

  console.log(showModal);

   const handleClick = () => {
    setName("Javid");
    // console.log(name);
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

  const handleModal = () => {
    setShowModal(false);
  }

  const subTitle = "All the best guys";



  return (
    <div className="App">

      {/* Calling Component */}
      <Title title="Web Dev Teaching" subTitle={subTitle}/>

      <Title title="Web Dev Teaching to my student" subTitle="You guys are good"/>
      
      {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>hide Event</button>
      </div>}

      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>Show Event</button>
      </div>}

      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>

      {showEvents && events.map((event) => (
        <React.Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleRemove(event.id)}>Remove</button>
        </React.Fragment>
      ))}

      {/* <Model>
        <h2>50% offer Coupon Code!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque.</p>
      </Model> */}
      {showModal && <Model handleModal={handleModal}>
        <h3>50% offer Coupon Code!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque.</p>
      </Model>}

     <button onClick={() => setShowModal(true)}>Show Modal</button>
      
    </div>
  );
}

export default App;
