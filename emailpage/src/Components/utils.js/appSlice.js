import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:"app",
    initialState:{
        emailDetails:[],
        favoriteEmail:[],
        isEmailSideBarOpen:true
    },
    reducers:{
        addEmailDetails:(state,action)=>{
            state.emailDetails=action.payload
        },
        addToFavorites: (state, action) => {
            state.favoriteEmail.push(action.payload);
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

export const {addEmailDetails,toggleSideBarOff,toggleSideBarOn,addToFavorites}=appSlice.actions;
export default appSlice.reducer