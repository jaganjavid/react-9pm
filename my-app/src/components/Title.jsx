import React from 'react'
import "./Title.css";

function Title({title, subTitle}) {
  return (
    <div>
        <h1 className='title'>{title}</h1>
        <br />
        <h2 className='subtitle'>{subTitle}</h2>
    </div>
  )
}

export default Title