import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:"app",
    intialState:{
        emailDetails:[],

    },
    reducers:{
        addEmailDetails:(state,action)=>{
            const{id,subject,date,name}=action.payload;
            state.emailDetails={id:id,sub:subject,date:date,name:name};
            
        }
        
    }

    
})
export const {addEmailDetails}=appSlice.actions
export default appSlice.reducer;