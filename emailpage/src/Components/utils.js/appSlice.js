import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:"app",
    initialState:{
        emailDetails:[],
        favoriteEmail:[],
        readEmail:[],
        isEmailSideBarOpen:true,
        selectedFilterOption:null,
        isfavoriteFilterOn:false,
        isReadEmailFilterOn:false,
        isUnreadEmailFilterOn:false
        
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
        },
        toggleFavoriteFilterOn:(state)=>{
            state.isfavoriteFilterOn=true
            state.isReadEmailFilterOn=false
            state.isUnreadEmailFilterOn=false
        },
        toggleReadEmailFilterOn:(state)=>{
            state.isReadEmailFilterOn=true
            state.isUnreadEmailFilterOn=false
            state.isfavoriteFilterOn=false


        },
        toggleUnreadEmailFilterOn:(state)=>{
            state.isUnreadEmailFilterOn=true
            state.isReadEmailFilterOn=false
            state.isfavoriteFilterOn=false
        },
        toggleRemoveFilter:(state)=>{
            state.isReadEmailFilterOn=false
            state.isfavoriteFilterOn=false
            state.isUnreadEmailFilterOn=false
        }

        }
    }

)

export const {addEmailDetails,toggleUnreadEmailFilterOn,toggleRemoveFilter,toggleReadEmailFilterOn,toggleFavoriteFilterOn,addSelectedOption,toggleSideBarOff,toggleSideBarOn,addToReadEmail,addToFavorites,removeFromFavorites}=appSlice.actions;
export default appSlice.reducer