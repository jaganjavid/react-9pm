import React from 'react'
import { Link}  from 'react-router-dom';
const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Error enim commodi fugiat consectetur perspiciatis optio 
        exercitationem accusamus voluptatem quaerat maxime tempora vel, 
        in neque distinctio impedit officiis vitae adipisci! Ex.</p>
      <Link to="/">Go to Home</Link>  
    </div>
  )
}

export default AboutPage