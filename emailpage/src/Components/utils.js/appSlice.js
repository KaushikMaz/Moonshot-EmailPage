import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:"app",
    initialState:{
        emailDetails:[],
        isEmailSideBarOpen:true
    },
    reducers:{
        addEmailDetails:(state,action)=>{
            state.emailDetails=action.payload
        },
        toggleSideBarOff:(state)=>{
            state.isEmailSideBarOpen=false
        },
        toggleSideBarOn:(state)=>{
            state.isEmailSideBarOpen=true
        }

        }
    }

)

export const {addEmailDetails,toggleSideBarOff,toggleSideBarOn}=appSlice.actions;
export default appSlice.reducer