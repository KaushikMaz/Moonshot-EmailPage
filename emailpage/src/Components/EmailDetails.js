import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addToFavorites } from './utils.js/appSlice'



const EmailDetails = () => {
  const dispatch=useDispatch()
  const isEmailSideBarOpen=useSelector(appStore=>appStore.app.isEmailSideBarOpen)
  const emailBodyDetails=useSelector(appStore=>appStore.app.emailDetails)
  if(!isEmailSideBarOpen) return null;
  if(!emailBodyDetails) return null;

  
const firstLetterOfName = emailBodyDetails?.name && emailBodyDetails.name.length > 0
? emailBodyDetails.name[0]
: ''; 

  const handleFavorite=()=>{
    dispatch(addToFavorites(emailBodyDetails?.id))
  }
     
  return (
    <div className="border custom-border flex-1 rounded-lg m-4 h-screen w-[40rem]">
      <button onClick={handleFavorite} className="absolute custom-accent top-20 left-[70rem] text-white rounded-l-full rounded-r-full p-1 px-3">Mark as Favourite</button>
       <div className="flex mt-4">
        <div className="mx-4 mt-1">
            <h1 className='w-10 h-10  pl-3 pt-1.5 border custom-accent text-white font-bold rounded-full '>{firstLetterOfName}</h1>
        </div>
        <div>
            <p className="custom-text text-2xl font-semibold">{emailBodyDetails?.sub}</p>
            <p className="custom-text mt-4">{emailBodyDetails?.date}</p>


        </div>
        </div>


    </div>
  )
}

export default EmailDetails