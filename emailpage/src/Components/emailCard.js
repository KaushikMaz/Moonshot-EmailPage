import React from 'react' ;
import { useDispatch,useSelector } from 'react-redux';
import { addEmailDetails, toggleSideBarOn,addToReadEmail} from './utils.js/appSlice';

const EmailCard = ({data}) => {
    const dispatch=useDispatch()
    const openedId=useSelector(store=>store?.app?.emailDetails?.id)
    const favoriteId=useSelector(store=>store?.app?.favoriteEmail)
    const readEmail=useSelector(store=>store?.app?.readEmail)
    if(!data) return null;
    const {id,subject,date,short_description}=data
    const{ email,name}=data?.from

   
    
   
// Create a Date object
const newDate = new Date(date);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
// Format as "dd/MM/yyyy hh:mm a"
const formattedDate = new Intl.DateTimeFormat('en-GB',options).format(newDate)
const handleCardClick=()=>{
dispatch(addEmailDetails({id:id,sub:subject,date:formattedDate,name:name}))
dispatch(toggleSideBarOn())
!readEmail.includes(id) && dispatch(addToReadEmail(id))
}

    
  return (
    <div className={`${(id===openedId)?"custom-onClickedBorder":"custom-border"} ${readEmail.includes(id) && readEmail[readEmail.length-1]!==id && "custom-readBackground transition-background"} bg-white hover:shadow-lg max-w-screen  m-2 md:m-4 relative top-8  p-1 py-2 md:py-3 rounded-lg cursor-pointer`} onClick={handleCardClick}>
        <div className="flex">
        <div className="mx-2 md:mx-4 mt-1">
            <h1 className='w-10 h-10  pl-4 pt-1 border custom-accent text-white font-bold rounded-full '>{name[0]}</h1>
        </div>
        <div className='text-sm md:text-md'>
            <p>From:<span className="custom-text font-bold">{name}{"<"}{email}{">"}</span></p>
            <p> Subject:<span className="custom-text font-bold">{subject}</span></p>
            <p>{short_description}</p>
            <div className="flex">
            <p>{formattedDate}</p>
            {(favoriteId.includes(id)) &&
            <p className="md:px-5  favorite-textColor">Favourite</p>}
            </div>


        </div>
        </div>

    </div>
  )
}

export default EmailCard