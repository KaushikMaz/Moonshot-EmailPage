import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:"app",
    initialState:{
        emailDetails:[]
    },
    reducers:{
        addEmailDetails:(state,action)=>{
            state.emailDetails=action.payload
        }
    }

})

export const {addEmailDetails}=appSlice.actions;
export default appSlice.reducer