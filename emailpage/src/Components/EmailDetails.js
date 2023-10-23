import React from 'react'
import { useSelector } from 'react-redux';

const EmailDetails = () => {
  // const emailBodyDetails=useSelector(store=>store.app.emailDetails)
  const [emailBody,setEmailBody]=React.useState([])

  React.useEffect(()=>{
    emailDescription();

  },[])

  const emailDescription=async()=>{
    try{
      const data=await fetch("https://flipkart-email-mock.vercel.app/?id=2")
      if(!data.ok){
        throw new Error("There is an issue with the Network response")
      }
      const json=await data.json()
      setEmailBody(json)
      console.log(emailBody)
    }catch(error){
      console.error("Error:",error)
    }
  }
  return (
    <div className="border custom-border rounded-lg m-4 h-screen">
      <h1>{emailBody}</h1>

    </div>
  )
}

export default EmailDetails