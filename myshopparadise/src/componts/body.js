import React, { useState } from "react";
import tree from "../assests/tree.jpg"
import "./body.css"
import { useSelector, useDispatch } from 'react-redux'


// This is our body which is the first screen which appears there is button over here when we click on this button
// this  div will be hided and the  products will be shown there  



import change from "./Reducer";
export default function Body(){

     let [display1 , setDisplay] = useState("")

     let display = useSelector((state)=>state.display)

     let todipatch =  useDispatch()
     
     const GetStarted = ()=>{




        

          todipatch(change("none"))
            
          setDisplay(display)

     }

    return(
        <div className="skeleton" style={{width:"100%" , display:display1}} >
       <div style={{width:"90%" , height:"80vh" , display:"flex" , alignItems:"center" , justifyContent:"center" }}>

         

          <div style={{width:"100%" , display:"flex" , flexDirection:"column"  }} >

         <div style={{width:"100%"}}  >

    <div style={{color:"white" , padding:"5%" , width:"100%"}}>
                <p style={{fontSize:"1rem"}}>
This At Paradise Plant Point, we believe every home deserves a touch of nature. What started as a small backyard project has grown into a community of plant lovers who share a passion for sustainability, growth, and good vibes.

Our team carefully sources each plant from trusted growers, ensuring that every leaf, stem, and root meets our standards of quality and care. Whether you’re a beginner or a plant pro, we’re here to help you grow with confidence.
            Explore our curated collection of indoor plants, outdoor greenery, succulents, and rare finds. Each plant comes with detailed care instructions — so even first-time plant parents can thrive.    

                </p>
              </div>
  <div  style={{color:"white"}}>

                    <button onClick={()=>{ GetStarted()}} style={{background:"none" ,color:"white" , padding:"1vh" , fontSize:"4vh", fontWeight:"bold" , width:"50%" }}>Get Started</button>
                </div>

              

         </div>



          </div>

               </div>
        </div>
    )
}