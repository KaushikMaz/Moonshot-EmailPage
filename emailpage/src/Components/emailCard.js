import React from 'react' ;
import { useDispatch,useSelector } from 'react-redux';
import { addEmailDetails, toggleSideBarOn} from './utils.js/appSlice';

const EmailCard = ({data}) => {
    const dispatch=useDispatch()
    const favoriteId=useSelector(store=>store?.app?.favoriteEmail)
    if(!data) return;
    const {id,subject,date,short_description}=data
    const{ email,name}=data?.from

   
    
    // Replace 'timestamp' with your actual Unix Epoch time in seconds
const timestamp = date; // Example timestamp

// Create a Date object
const newDate = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds

// Format as "dd/MM/yyyy hh:mm a"
const formattedDate = newDate.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
});
const handleCardClick=()=>{
dispatch(addEmailDetails({id:id,sub:subject,date:formattedDate,name:name}))
dispatch(toggleSideBarOn())
}

    
  return (
    <div className="border custom-border max-w-screen m-4 rounded-lg cursor-pointer" onClick={handleCardClick}>
        <div className="flex">
        <div className="mx-4 mt-1">
            <h1 className='w-10 h-10  pl-4 pt-1 border custom-accent text-white font-bold rounded-full '>{name[0]}</h1>
        </div>
        <div className='text-md'>
            <p>From:<span className="custom-text font-bold">{name}{"<"}{email}{">"}</span></p>
            <p> Subject:<span className="custom-text font-bold">{subject}</span></p>
            <p>{short_description}</p>
            <p>{formattedDate}</p>
            {(favoriteId.includes(id)) &&
            <p className="border border-black px-2 py-1 w-20 rounded-l-full rounded-r-full">Favourite</p>}


        </div>
        </div>

    </div>
  )
}

export default EmailCard