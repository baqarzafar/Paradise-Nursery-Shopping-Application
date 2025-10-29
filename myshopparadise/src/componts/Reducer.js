import { createSlice , nanoid } from "@reduxjs/toolkit";



export const slice1 = createSlice({
          name:"myslice1",
          initialState: {display:"none" , stateofapplication:[]}, 
          reducers:{
            change:(state ,action)=>{
                 
             if(action.payload==="none"){
                state.display =""
                
             }
},
             addtocart:( state , action )=>{
                state.stateofapplication.push(action.payload)

             }
,
             removefromcart:(state , action)=>{
            state.stateofapplication = state.stateofapplication.filter(
        (data) => data.id !== action.payload
      );

             }
          
            }

         })
export  let addtocart   =  slice1.actions.addtocart 
export  let removefromcart = slice1.actions.removefromcart
export default slice1.actions.change

export let myreducer = slice1.reducer