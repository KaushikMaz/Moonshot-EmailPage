import React from 'react'
import EmailCard from './emailCard'

const EmailPage = () => {
  const [emailData,setEmailData]=React.useState([])
    React.useEffect(()=>{
        getEmailData();


    },[])

    const getEmailData=async()=>{
        try{
            const data=await fetch('https://flipkart-email-mock.vercel.app/page=1' )
            if(!data.ok){
                throw new Error("Network Response was not Okay!!")
        }
        
            const json=await data.json()
            // console.log(json?.list)
            setEmailData(json?.list)
        }catch(error){
            console.error("Error:",error)
        }

    }
  return (
    <div className="flex-1">{emailData.map((emaildata)=><EmailCard key={emaildata.id} data={emaildata}/>)}</div>
  )
}

export default EmailPage