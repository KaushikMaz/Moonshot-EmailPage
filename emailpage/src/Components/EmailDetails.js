import React from 'react'
import dompurify from "dompurify"
import {useSelector,useDispatch} from "react-redux"
import { addToFavorites, removeFromFavorites,toggleSideBarOff } from './utils.js/appSlice'



const EmailDetails = () => {
  const [emailBody,setEmailBody]=React.useState()
  const dispatch=useDispatch()
  const isEmailSideBarOpen=useSelector(appStore=>appStore.app.isEmailSideBarOpen)
  const emailBodyDetails=useSelector(appStore=>appStore.app.emailDetails)

  const favoriteEmail=useSelector(store=>store?.app?.favoriteEmail)
  React.useEffect(()=>{
     getEmailBody()

  })
  const getEmailBody=async()=>{
    const data=await fetch(`https://flipkart-email-mock.vercel.app/?id=${emailBodyDetails?.id}`)
    const response=await data.json()
    setEmailBody(response?.body)
  }
  if(!isEmailSideBarOpen) return null;
  
const firstLetterOfName = emailBodyDetails?.name && emailBodyDetails.name.length > 0
? emailBodyDetails.name[0]
: ''; 

  const handleFavorite=(id)=>{
    !favoriteEmail.includes(id)?dispatch(addToFavorites(id)):dispatch(removeFromFavorites(id))
        
  }
  
  const EmailBodyComponent=({ htmlContent })=>{
    const sanitizedString=dompurify.sanitize(htmlContent,{FORCE_BODY:true})
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedString }}
    />
  );
}



     
  return (
    <div className="border relative custom-border bg-white flex-1 rounded-lg md:top-8  md:m-4 w-[24rem] md:w-[40rem]">
      <button onClick={()=>handleFavorite(emailBodyDetails?.id)} className="custom-accent  relative top-20 md:top-10 left-[14rem] md:left-[25rem] text-white rounded-l-full text-sm md:text-base rounded-r-full p-1 px-1 md:px-3">{favoriteEmail.includes(emailBodyDetails?.id)?"Remove from favorites":"Mark as Favourite"}</button>
      <div className=" pl-2 pb-3 pt-1  md:hidden">
        <svg  onClick={()=>dispatch(toggleSideBarOff())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
        </svg>
      </div>
       <div className="flex text-sm md:text-base ">
        <div className="mx-1 md:mx-4 md:mt-1">
            <h1 className='w-5 md:w-10 h-5 md:h-10  pl-1 md:pl-3 md:pt-1.5 border custom-accent text-white font-semibold md:font-bold rounded-full '>{firstLetterOfName}</h1>
        </div>
        <div>
            <p className="custom-text text-base md:text-2xl font-semibold">{emailBodyDetails?.sub}</p>
            <p className="custom-text mt-2 md:mt-4">{emailBodyDetails?.date}</p>
            <div>
              <EmailBodyComponent htmlContent={emailBody}/>
            </div>


        </div>
        </div>


    </div>
  )
}

export default EmailDetails