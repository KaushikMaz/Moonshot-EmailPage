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
        removeFromFavorites:(state,action)=>{
            state.favoriteEmail=state.favoriteEmail.filter(item=>item!==action.payload)
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

export const {addEmailDetails,toggleSideBarOff,toggleSideBarOn,addToFavorites,removeFromFavorites}=appSlice.actions;
export default appSlice.reducer