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
        <div className="skeleton" style={{ display:display1 ,width:"100%" }} >
        
            <div  className="PointA"  style={{}}>





           <div className="PointB"    style={{  }}>
            
            
            <div className="PointC" style={{}}>
           
            <div className="PointD" style={{}} >
                       <div    className="PointE"              style={{}} >
                 <div   className="PointF"       style={{}    }               >
                   WELCOME TO PARADISE NURSERY
                </div>

                <div  className="Pointf" style={{}    }                >Where Green Meet Serenity</div>

               
        
 
                <div className="Pointg"  style={{ }}>

              <div className="Pointi" style={{}}>    
                
               <button  className="Pointl"       onClick={()=>{ GetStarted()}} style={{ }}>Get Started</button>
               
               
            </div> </div>    </div> 

            </div>



                 <div className="PointG" style={{}}>
                       
            <p  className="PointH"  style={{}}                 >


Welcome to Paradise Nursery, where every child blossoms in a world of care, creativity, and discovery. Our nursery provides a safe, nurturing, and stimulating environment where young minds can grow, explore, and develop a lifelong love for learning. With dedicated educators, engaging activities, and a warm community atmosphere, Paradise Nursery is truly a place where happiness and education flourish side by side.


            </p>

                </div> 



            </div>
  
           
           
         
           
           



           
           </div>
         




















                
            </div>
         
        </div>
    )
}