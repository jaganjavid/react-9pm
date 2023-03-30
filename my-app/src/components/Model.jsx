import React from 'react';
import "./Modal.css";

export default function Model({children,handleModal}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
          {children}
          <button onClick={handleModal}>Close</button>
        </div>
    </div>
  )
}
