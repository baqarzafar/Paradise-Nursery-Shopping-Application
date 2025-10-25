import React from "react";
import Heeader from "./head";
import Body from "./body";
import Products from "./Products";

export default function  Content(){

    return(
        <div  style={{width:"100%" , height:"100%"}}>
           
            <Heeader></Heeader>
           
                 <Body></Body>
          
            <Products></Products>

        </div>
    )
}