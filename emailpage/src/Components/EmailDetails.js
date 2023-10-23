import React from 'react'
import {useSelector} from "react-redux"


const EmailDetails = () => {
  const emailBodyDetails=useSelector(appStore=>appStore.app.emailDetails)
  if(!emailBodyDetails) return;
  
     
  return (
    <div className="border custom-border rounded-lg m-4 h-screen w-[40rem]">
      <button className="absolute custom-accent top-20 left-[70rem] text-white rounded-l-full rounded-r-full p-1 px-3">Mark as Favourite</button>
       <div className="flex mt-4">
        <div className="mx-4 mt-1">
            <h1 className='w-10 h-10  pl-3 pt-1.5 border custom-accent text-white font-bold rounded-full '>{emailBodyDetails?.name[0]}</h1>
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