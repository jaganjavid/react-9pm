import React from 'react';
import "./Modal.css";



export default function Model({children,handleModal,isStyleModel}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal' style={{
          border: "4px solid",
          // borderColor:"red",
          borderColor: isStyleModel ? "red" : "blue",
          textAlign:"center"
        }}>
          {children}
          {/* <button className={isStyleModel ? "sales-btn" : ""} onClick={handleModal}>Close</button> */}
        </div>
    </div>
  )
}
