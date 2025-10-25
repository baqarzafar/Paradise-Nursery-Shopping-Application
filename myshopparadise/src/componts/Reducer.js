import { createSlice , nanoid } from "@reduxjs/toolkit";



export const slice1 = createSlice({
          name:"myslice1",
          initialState: {display:"none"},
          reducers:{
            change:(state ,action)=>{
                 
             if(action.payload==="none"){
                state.display =""
                
             }
          }
          }

})
export default  slice1.actions.change

export let myreducer = slice1.reducer