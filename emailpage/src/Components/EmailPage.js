import React from 'react'
import EmailCard from './emailCard'
import { useSelector } from 'react-redux'

const EmailPage = () => {
  const favoriteEmail=useSelector(store=>store?.app?.favoriteEmail)
  const readEmail=useSelector(store=>store?.app?.readEmail)
  const isfavoriteFilterOn=useSelector(store=>store?.app?.isfavoriteFilterOn)
  const isReadEmailFilterOn=useSelector(store=>store?.app?.isReadEmailFilterOn)
  const isUnReadEmailFilterOn=useSelector(store=>store?.app?.isUnreadEmailFilterOn)
  const [emailData,setEmailData]=React.useState([])
    React.useEffect(()=>{
        getEmailData();


    },[])

    const getEmailData=async()=>{
        try{
            const data=await fetch('https://flipkart-email-mock.vercel.app/' )
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
    <div className="flex-1">
    {isfavoriteFilterOn? (
      emailData.filter(data => favoriteEmail.includes(data?.id))
        .map(emaildata => <EmailCard key={emaildata.id} data={emaildata} />)
    ) : isReadEmailFilterOn ? (
      emailData.filter(data => readEmail.includes(data?.id))
        .map(emaildata => <EmailCard key={emaildata.id} data={emaildata} />)
    ) : isUnReadEmailFilterOn ? (
      emailData.filter(data => !readEmail.includes(data?.id))
        .map(emaildata => <EmailCard key={emaildata.id} data={emaildata} />)
    ):(
      emailData.map(emaildata => (
        <EmailCard key={emaildata.id} data={emaildata} />
      )))
    }
  </div>
)

  

      
}

export default EmailPage