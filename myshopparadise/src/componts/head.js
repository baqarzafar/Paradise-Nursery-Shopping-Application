import React from "react";
import "./body.css"
import { useSelector, useDispatch } from 'react-redux'

export default function Heeader(){
         let display = useSelector((state)=>state.display)
 
    return(
        <div className="HeaderR" style={{backgroundblendmode:"hard-light" ,width:"100%" , height:"5vh",backgroundColor:"black" , color:"white" , fontSize:"5vh" ,fontFamily:"serif" ,display:display}} >
                   Paradise Plant Point~
              
        </div>
    )
}