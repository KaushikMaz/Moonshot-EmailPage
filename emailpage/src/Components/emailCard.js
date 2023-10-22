import React from 'react'

const EmailCard = ({data}) => {
    if(!data) return;
    const {subject,date,short_description}=data
    const{ email,name}=data?.from
    
  return (
    <div className="border custom-border m-4 rounded-lg">
        <div className="flex">
        <div className="m-4">
            <h1 className='w-10 h-10  pl-4 pt-1 border custom-accent text-white font-bold rounded-full '>{name[0]}</h1>
        </div>
        <div className='text-md'>
            <p>From:<span className="custom-text font-bold">{name}{"<"}{email}{">"}</span></p>
            <p> Subject:<span className="custom-text fond-bold">{subject}</span></p>
            <p>{short_description}</p>
            <p></p>


        </div>
        </div>

    </div>
  )
}

export default EmailCard