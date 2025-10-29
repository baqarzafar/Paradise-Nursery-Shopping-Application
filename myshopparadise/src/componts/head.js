import React from "react";
import "./body.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import Products from "./Products";
import  "./header.css"

export default function Heeader(){
    
         let display = useSelector((state)=>state.display)
         let TotalItem  = useSelector((state)=>state.stateofapplication)

        
 
    return(
        <div className="HeaderR" style={{backgroundblendmode:"hard-light" ,backgroundColor:"black" , color:"white" , fontFamily:"serif" ,display:display}} >
            <div style={{display:"flex" , justifyContent:"space-between"}}>

              <h1>Paradise Plant Providers</h1>
              <Link to="/Productlisting">
              <button  style={{width:"100px" , height:"100px" , borderRadius:"100%" , background:"none" , fontSize:"25px"  , color:"white" , position:"abolute"}}                > { TotalItem.length}  </button></Link>
            </div>
              
        </div>
    )
}