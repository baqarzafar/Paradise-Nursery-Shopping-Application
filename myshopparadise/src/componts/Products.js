import React from "react";
// import { useSelector } from "react-redux";
import flower1 from "./flowerpicture/flower1.webp"
import flower2 from "./flowerpicture/flower2.webp"
import flower3 from "./flowerpicture/flower3.avif"
import flower4 from "./flowerpicture/flower4.webp"
import flower5 from "./flowerpicture/flower5.webp"
import flower6 from "./flowerpicture/flower6.webp"
import "./Products.css"
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from "./Reducer";
import { removefromcart } from "./Reducer";
export default function Products(){

    let selector = useSelector((state)=>state)
    console.log(selector.stateofapplication)
    let dipatch = useDispatch()

    
    let ProductsList = [
        
        {id:1 , name:"redflower" ,image: flower1 , price:200},
        {id:2 , name:"redflower" ,image:flower2 , price:200},
        {id:3 , name:"redflower" ,image:flower3 , price:250},
        {id:4 , name:"redflower" ,image:flower4 , price:500},
        {id:5 , name:"redflower" ,image:flower5 , price:800 },
        {id:6 , name:"redflower" ,image:flower6 , price:4500}]
   const addtocart1 = (id)=>{
        
      const datatosend = ProductsList.filter(data=>data.id ===id)
      const nowthedataisReadytosent = datatosend[0]
      dipatch(addtocart(nowthedataisReadytosent))

   }


   let display =   useSelector((state)=>{ return state.display  })
   
      

     

     


    return (

        <div className="frame1" style={{  display:display}}  >

            <div className="frame2"  style={{}}>
                {
                    ProductsList.map((d , index)=>{

                          return(
                            <div  className="frame3" style={{}}            >
                                <div  className="frame4"   style={{}}  >
                                    <img className="frame5" style={{}}         src={d.image}></img>
                                     <h1>{d.price +"$"}</h1>

                                     <button  style={{backgroundColor:"pink" , border:"none" , padding:"5%"}}     onClick={()=>{addtocart1(d.id)}}  >Add to cart</button>
                                </div>

                                  
                            </div>
                          )

                    })
                }
            </div>

        </div>
    )
}