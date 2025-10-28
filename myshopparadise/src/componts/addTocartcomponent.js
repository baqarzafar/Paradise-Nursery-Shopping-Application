import react from "react";
import "./addtocart.css"


export function ProductListing(){


let remove = ()=>{ }
    return(
        <div>

           <div>

            {Array.map(()=>{

                return(
                    <div className="main">
                         
                         <div><img src={}></img></div>
                         <div></div>
                         <div><button style={{background:"red" , color:"white" , padding:"3%"}} onClick={()=>{remove()}}>Remove from cart</button></div>
                    </div>
                )
            })}
           </div>




        </div>
    )
}