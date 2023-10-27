import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleSideBarOff,toggleUnreadEmailFilterOn,toggleRemoveFilter,addSelectedOption, toggleReadEmailFilterOn,toggleFavoriteFilterOn } from './utils.js/appSlice'


const FilterComponent = () => {

  const dispatch=useDispatch()
  const selectedFilterOption=useSelector(store=>store?.app?.selectedFilterOption)

  const handleClick=()=>{
    dispatch(toggleSideBarOff())

  }

  const selectOption=(id)=>{
    dispatch(addSelectedOption(id))

  }

  const handleFavorites=()=>{
    dispatch(toggleFavoriteFilterOn())
    selectOption(3)
  }
  const handleReadEmails=()=>{
    dispatch(toggleReadEmailFilterOn())
    selectOption(1)
  }
  const handleUnreadEmails=()=>{
    dispatch(toggleUnreadEmailFilterOn())
    selectOption(2)}
    
  const handleRemoveFilters=()=>{
    dispatch(toggleRemoveFilter())
    selectOption(4)
  }
  return (
    <div className="border bg-white custom-border p-1 max-w-screen flex justify-between rounded-l-full rounded-r-full my-2 mb-0 ">
      <div className='flex'>
      <p className="px-4">filter by:</p>
      <p className={`${selectedFilterOption===1 && "border custom-border rounded-l-full rounded-r-full custom-filterButton"} cursor-pointer px-4`} onClick={()=>handleReadEmails()}>Read</p>
      <p className={`${selectedFilterOption===2 && "border custom-border rounded-l-full rounded-r-full custom-filterButton"} px-4 cursor-pointer`} onClick={()=>handleUnreadEmails()}>Unread</p>
      <p className={`${selectedFilterOption===3 && "border custom-border rounded-l-full rounded-r-full custom-filterButton"} px-4 cursor-pointer`} onClick={()=>handleFavorites()}>Favourites</p>
      <p className={`${selectedFilterOption===4 && "border custom-border rounded-l-full rounded-r-full text-white custom-accent"} px-4 cursor-pointer`} onClick={()=>handleRemoveFilters()}>Remove Filters</p>
      </div>
      <div className="pr-4  cursor-pointer " onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>


    </div>
  )
}

export default FilterComponent