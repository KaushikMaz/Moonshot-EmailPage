import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:"app",
    initialState:{
        emailDetails:[],
        favoriteEmail:[],
        readEmail:[],
        isEmailSideBarOpen:true,
        selectedFilterOption:null
        
    },
    reducers:{
        addEmailDetails:(state,action)=>{
            state.emailDetails=action.payload
        },
        addToFavorites: (state, action) => {
            state.favoriteEmail.push(action.payload);
        },
        addToReadEmail: (state, action) => {
            state.readEmail.push(action.payload);
        },
        removeFromFavorites:(state,action)=>{
            state.favoriteEmail=state.favoriteEmail.filter(item=>item!==action.payload)
        },
        toggleSideBarOff:(state)=>{
            state.isEmailSideBarOpen=false
        },
        toggleSideBarOn:(state)=>{
            state.isEmailSideBarOpen=true
        },
        addSelectedOption:(state,action)=>{
            state.selectedFilterOption=action.payload
        }

        }
    }

)

export const {addEmailDetails,addSelectedOption,toggleSideBarOff,toggleSideBarOn,addToReadEmail,addToFavorites,removeFromFavorites}=appSlice.actions;
export default appSlice.reducer