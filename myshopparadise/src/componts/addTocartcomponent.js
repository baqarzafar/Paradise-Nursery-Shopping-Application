
import "./addtocart.css"


import { removefromcart } from "./Reducer";
import Heeader from "./head";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./Store";


export function ProductListing(){

 let data = useSelector(state=>state)
 const array = data.stateofapplication
 const dispatch =        useDispatch()
   
const remove = (id)=>{
    dispatch(removefromcart(id))
}   
                return(

        <Provider store={store}>
        <div style={{width:"100%"}}>
           
             <Heeader></Heeader> 

         

           <div >

            {array.map((data)=>{

                return(
                    <div className="main" style={{display:"flex" ,justifyContent:"space-between" , marginTop:"10%"}}>
                         
                         <div className="Pimage" style={{}}><img style={{width:"100%"}} src={data.image} ></img></div>
                         <div className="Pname"style={{}}>{data.name}</div>
                         <div className="Pprice"  style={{}}              >{data.price}$</div>
                         <div className="Premove" style={{}}>
                            
                            <button style={{background:"red" , color:"white" , padding:"3%"}} onClick={()=>{remove(data.id)}}>Remove from cart</button>
                            </div>
                    </div>
                )
            })}
            
              <div>
                <button style={{backgroundColor:"green"  , padding:"1%"}}>Continue shoping</button>
              </div>

           </div>


        </div>
        </Provider>
    )
}