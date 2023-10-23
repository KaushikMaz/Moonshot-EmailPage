import React from 'react'

const EmailDetails = () => {
  React.useEffect(()=>{
    emailDescription();

  },[])

  const emailDescription=async()=>{
    try{
      const data=await fetch("https://flipkart-email-mock.vercel.app/?id=3")
      if(!data.ok){
        throw new Error("There is an issue with the Network response")
      }
      const json=await data.json()
    }catch(error){
      console.error("Error:",error)
    }
  }
  return (
    <div className="border custom-border rounded-lg m-4 h-screen">
      <h1>I am back</h1>

    </div>
  )
}

export default EmailDetails