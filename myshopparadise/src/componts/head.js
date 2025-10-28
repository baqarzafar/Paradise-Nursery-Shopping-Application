import React from "react";
import "./body.css"
import { useSelector, useDispatch } from 'react-redux'

export default function Heeader(){

        
         let display = useSelector((state)=>state.display)
 
    return(
        <div className="HeaderR" style={{backgroundblendmode:"hard-light" ,width:"100%" , height:"10vh",backgroundColor:"black" , color:"white" , fontFamily:"serif" ,display:display}} >
            <div style={{display:"flex" , justifyContent:"space-between"}}>

<h1>Paradise Plant Providers</h1>
 
<button  style={{width:"100px" , height:"100px" , borderRadius:"100%" , backgroundColor:"green" , fontSize:"25px" , border:"solid white" , color:"white" , position:"abolute"}}                > 0  </button>
            </div>
              
        </div>
    )
}