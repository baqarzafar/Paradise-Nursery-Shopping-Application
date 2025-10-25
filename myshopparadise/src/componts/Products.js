import React from "react";
import { useSelector } from "react-redux";

export default function Products(){
   let display =   useSelector((state)=>{ return state.display  })
   
      

    let ProductsList = [
        
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""},
        {id:1 , name:"redflower" ,image:""}
    ]
    

     


    return (

        <div  style={{ marginLeft:"7%"  ,   padding:"0.1px" , width:"93%" , marginTop:"2%"  , display:display}}  >

            <div style={{width:"100%" ,display:"flex" , flexFlow:"wrap"  , boxSizing:"content-box" }}>
                {
                    ProductsList.map((d , index)=>{

                          return(
                            <div  style={{border:"solid black" , width:"20rem" , height:"20rem" , margin:"1px"}}            >

                                    {index}
                            </div>
                          )

                    })
                }
            </div>

        </div>
    )
}