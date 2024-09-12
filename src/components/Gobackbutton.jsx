import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from "react-router-dom";


const Gobackbutton = () => {
const navigate=useNavigate();
  return (
    <>
            {/* <button onClick={()=>{navigate(-1)}}>back</button> */}
            <div className="div">
            <FontAwesomeIcon icon={faArrowLeft} onClick={()=>{navigate(-1)}}  style={{color:'#FFFFFF',fontSize:30}}/>
            </div>
    </>
  )
}

export default Gobackbutton;